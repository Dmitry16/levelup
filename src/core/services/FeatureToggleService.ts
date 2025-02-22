import config from "../config/verticals";

class FeatureToggleService {
  isFeatureEnabled(featureName: string): boolean {
    return config.features?.[featureName] ?? false;
  }
}

export default new FeatureToggleService();
