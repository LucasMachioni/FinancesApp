import React from "react";
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import Background from "./src/components/Background";
import { config } from "@gluestack-ui/config";


export default function App() {
  return (
    <GluestackUIProvider config={config}>
    <Background />
    </GluestackUIProvider>
  );
}