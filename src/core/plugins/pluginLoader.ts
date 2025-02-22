import { registeredVerticals } from "../config/verticals";

const loadPlugins = async () => {
  for (const verticalName of registeredVerticals) {
    try {
      const module = await import(`../../verticals/${verticalName}/index.ts`);
      module.default.register();
    } catch (error) {
      console.error(`Failed to load vertical: ${verticalName}`, error);
    }
  }
};

export default loadPlugins;
