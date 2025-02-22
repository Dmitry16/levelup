import { lazy } from "react";

// Mapping widget names to dynamic imports
const widgetMap: Record<string, any> = {
  WeatherWidget: lazy(() => import("../../widgets/WeatherWidget")),
  NewsWidget: lazy(() => import("../../widgets/NewsWidget")),

};

export const loadWidget = (widgetName: string) => {
  return widgetMap[widgetName] || null;
};
