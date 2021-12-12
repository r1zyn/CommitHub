import type { Arguments, CommandBuilder } from "yargs";

type Options = {
	name: string;
	upper: boolean | undefined;
};

export const command: string = "greet <name>";
export const description: string = "Greet <name> with Hello";

export const builder: CommandBuilder<Options, Options> = (yargs) =>
	yargs
		.options({
			upper: { type: "boolean" }
		})
		.positional("name", { type: "string", demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
	const { name, upper }: Arguments<Options> = argv;
	const greeting: string = `Hello, ${name}!`;
	process.stdout.write(upper ? greeting.toUpperCase() : greeting);
	process.exit(0);
};
