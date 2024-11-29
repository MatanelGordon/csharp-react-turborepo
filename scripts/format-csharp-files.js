import process from "node:process";
import path from "node:path";
import fs from "node:fs/promises";
import { exec } from "node:child_process";

const filesToProcess = process.argv.slice(2);

async function validateDir(absPath) {
	const pathStat = await fs.stat(absPath);
	if (pathStat.isDirectory()) return absPath;
	return path.dirname(absPath);
}

function execAsync(command) {
	return new Promise((res, rej) => {
		console.log(command);
		exec(
			command,
			{
				encoding: "utf8",
			},
			(error, stdout, stderr) => {
				if (error) {
					rej(stderr);
					return;
				}

				res(stdout);
			},
		);
	});
}

/**
 * find all files in first parent directory that matches this ext.
 * @param absPath {string}
 * @param ext {string}
 * @returns {Promise<string | null>}
 */
async function findFilesWithExt(absPath, ext) {
	const dir = await validateDir(absPath);
	const files = await fs.readdir(dir);
	const matchedFile = files.find((file) => path.extname(file) === ext);

	if (!matchedFile) {
		const parent = path.dirname(dir);

		if (absPath === parent) return null;
		return findFilesWithExt(parent, ext);
	}

	return path.join(dir, matchedFile);
}

const csprojToProcess = new Set();

await Promise.all(
	filesToProcess.map(async (fileToProcess) => {
		const csproj = await findFilesWithExt(fileToProcess, ".csproj");

		if (!csproj) return;

		csprojToProcess.add(csproj);
	}),
);

await Promise.all(
	Array.from(csprojToProcess).map(async (csproj) => {
		console.log(`[+] Formatting project ${path.basename(csproj)}`);
		await execAsync(`dotnet format whitespace ${csproj}`);
		await execAsync(`dotnet format style ${csproj}`);
	}),
);
