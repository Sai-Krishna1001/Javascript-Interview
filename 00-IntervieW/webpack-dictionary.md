# Webpack Terminology Keywords Dictionary

| **Keyword/Term**        | **Definition**                                                                                       |
|-------------------------|------------------------------------------------------------------------------------------------------|
| **Webpack**             | A module bundler for JavaScript applications. It takes modules with dependencies and generates static assets representing those modules. |
| **Bundle**              | The output file or files generated by Webpack that combine all the modules and dependencies into a single or multiple files ready for deployment. |
| **Module**              | A single unit of code that Webpack processes. Modules can be JavaScript files, CSS files, images, or other types of files that are imported and used in the application. |
| **Entry**               | The starting point or file where Webpack begins bundling. The entry point specifies the module that Webpack should start with to build the dependency graph. |
| **Output**              | The configuration section in Webpack where you define the location and filename of the generated bundles. It specifies where Webpack should output the bundled files. |
| **Loader**              | A transformation tool that preprocesses files before they are included in the bundle. Loaders allow Webpack to handle various types of files, such as converting TypeScript to JavaScript or processing CSS. |
| **Plugin**              | A tool that extends Webpack's functionality by performing custom operations on the build process. Plugins can optimize bundles, manage assets, and enhance the build process. |
| **Configuration (Webpack Config)** | The file (`webpack.config.js`) where you define the settings and options for Webpack. The configuration file includes settings for entry points, output, loaders, plugins, and other aspects of the build process. |
| **Dependency Graph**    | A representation of the relationships between modules in an application. Webpack uses the dependency graph to determine how modules depend on each other and how they should be bundled. |
| **Hot Module Replacement (HMR)** | A feature that allows modules to be updated at runtime without a full page reload. HMR improves development efficiency by enabling live reloading of code changes. |
| **Code Splitting**      | A technique that allows Webpack to split code into multiple bundles, which can be loaded on-demand. Code splitting improves performance by reducing the initial load time of an application. |
| **Tree Shaking**        | A process of removing unused code from the final bundle. Tree shaking eliminates dead code and helps reduce the size of the output bundles. |
| **Chunk**               | A segment of the final bundle that Webpack generates. Chunks can be created by code splitting and contain code that can be loaded independently. |
| **Manifest**            | A file that maps module IDs to filenames, used by Webpack to manage asset names and handle changes in file names due to hashing or versioning. |
| **Development Server**  | A server provided by Webpack (via `webpack-dev-server`) that serves the application during development. It includes features like live reloading and HMR. |
| **Source Map**          | A file that maps compiled code back to the original source code. Source maps help with debugging by allowing you to see the original code in browser developer tools. |
| **Entry Point**         | The file or module that serves as the starting point for Webpack to build the dependency graph and bundle the application. |
| **Resolve**             | The configuration section that specifies how Webpack should resolve module imports. It defines how to locate files, including resolving extensions and module directories. |
| **Alias**               | A configuration option that allows you to create shortcuts for module paths. Aliases simplify import statements and make module paths easier to manage. |
| **Public Path**         | The URL or path where the bundled assets will be served from. The public path is used to reference the location of assets in the generated bundles. |
| **Watch Mode**          | A feature that automatically rebuilds the bundle when changes are detected in the source files. Watch mode is useful for development to get real-time updates without manually triggering builds. |
| **Optimization**        | A configuration section that includes settings for optimizing the build process, such as minimizing code, merging chunks, and improving performance. |
| **Minification**        | The process of removing unnecessary characters from the code to reduce file size. Minification helps decrease the size of JavaScript and CSS files in the final bundle. |
| **Uglification**        | The process of transforming code to make it harder to read and understand, often used interchangeably with minification. Uglification reduces file size and obfuscates code. |
| **Mode**                | The configuration option that specifies the build environment (development or production). The mode affects how Webpack applies optimizations and handles various build settings. |
| **Devtool**             | A configuration option that controls the generation of source maps. Devtool settings define how source maps are created and their quality. |
| **Rule**                | A configuration object that defines how specific file types should be processed by Webpack. Rules specify which loaders to use for different file patterns. |
| **Target**              | A configuration option that specifies the environment in which the bundled code will run (e.g., web, node). The target affects how Webpack processes and transforms the code. |
| **Externals**           | A configuration option that allows you to exclude certain dependencies from the bundle. Externals are used to prevent Webpack from bundling libraries that are available globally or externally. |
| **Resolve.alias**       | A configuration option that creates shortcuts for module paths, making imports simpler and more manageable. Aliases are used to resolve modules more easily. |
| **Resolve.extensions**  | A configuration option that specifies which file extensions Webpack should resolve when importing modules. Extensions are used to simplify import statements. |
| **Resolve.modules**     | A configuration option that defines directories where Webpack should look for modules. Modules can be resolved from specific directories to improve module resolution. |
| **Webpack CLI**         | A command-line interface tool for running Webpack commands and managing builds. The Webpack CLI provides various commands for development, production, and configuration. |
| **Bundle Analysis**     | The process of analyzing the contents and size of bundles to understand their composition and optimize performance. Bundle analysis tools help identify large dependencies and improve bundle efficiency. |
| **Plugin API**          | The interface provided by Webpack for creating and interacting with plugins. The plugin API allows developers to extend Webpack's functionality and customize the build process. |
