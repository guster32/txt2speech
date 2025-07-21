# Text-to-Speech TypeScript Project

A TypeScript project for converting text to speech using Microsoft Azure Cognitive Services Speech SDK.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure Azure Speech Service:**
   - Get your subscription key and region from Azure Portal
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Edit `.env` and fill in your actual Azure credentials:
     ```
     AZURE_SPEECH_KEY=your-actual-key-here
     AZURE_SPEECH_REGION=your-actual-region-here
     ```

## Development

### Available Scripts

- `npm run dev` - Run the project in development mode with ts-node
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled JavaScript
- `npm run lint` - Run ESLint to check for code issues
- `npm run lint:fix` - Run ESLint and automatically fix issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is properly formatted

### VSCode Debugging

This project includes VSCode debugging configuration:

1. **Debug TypeScript directly**: Use the "Debug TypeScript" configuration to debug the TypeScript source files directly with ts-node
2. **Debug compiled JavaScript**: Use the "Debug Compiled JS" configuration to debug the compiled JavaScript files

**To debug:**
1. Set breakpoints in your TypeScript files
2. Press `F5` or go to Run and Debug panel
3. Select either "Debug TypeScript" or "Debug Compiled JS"
4. VSCode will prompt you to enter your Azure Speech Service credentials:
   - **Azure Speech Key**: Your subscription key from Azure Portal
   - **Azure Region**: Your service region (e.g., eastus, westus2)
5. The debugger will use these credentials as environment variables during the debug session

**Note**: The debugger will also check for a `.env` file, but the popup prompts take precedence for security and convenience.

### Project Structure

```
txt2speech/
├── src/
│   └── index.ts          # Main application file
├── .vscode/              # VSCode configuration
│   ├── launch.json       # Debug configurations
│   ├── settings.json     # Project settings
│   └── tasks.json        # Build tasks
├── dist/                 # Compiled JavaScript output
├── .env.example          # Environment variables template
├── .eslintrc.json        # ESLint configuration
├── .prettierrc           # Prettier configuration
├── .prettierignore       # Files to ignore for Prettier
├── .gitignore           # Git ignore rules
├── tsconfig.json        # TypeScript configuration
├── package.json         # Project dependencies and scripts
└── README.md           # This file
```

## Configuration Files

### TypeScript (tsconfig.json)
- Configured for ES2020 target
- Strict type checking enabled
- Source maps and declarations generated
- Output directory: `dist/`

### ESLint (.eslintrc.json)
- TypeScript ESLint rules
- Prettier integration
- Node.js environment
- Strict linting rules for code quality

### Prettier (.prettierrc)
- Single quotes
- Semicolons enabled
- 2-space indentation
- 80 character line width
- ES5 trailing commas

## Usage

1. Make sure you've configured your Azure credentials in the `.env` file (see Setup section)
2. Run the development server: `npm run dev`
3. The application will generate an audio file (`output.wav`) with the synthesized speech

## Dependencies

- **microsoft-cognitiveservices-speech-sdk**: Azure Speech Service SDK
- **dotenv**: Environment variable management
- **typescript**: TypeScript compiler
- **ts-node**: TypeScript execution for Node.js
- **eslint**: Code linting
- **prettier**: Code formatting
- **@types/node**: Node.js type definitions
