import { create } from 'zustand';

interface GenerationState {
  model: string;
  prompt: string;
  negativePrompt: string;
  guidanceScale: number;
  steps: number;
  width: number;
  height: number;
  scheduler: string;
  seed: number;
  batchSize: number;
  setModel: (model: string) => void;
  setPrompt: (prompt: string) => void;
  setNegativePrompt: (prompt: string) => void;
  setGuidanceScale: (scale: number) => void;
  setSteps: (steps: number) => void;
  setDimensions: (width: number, height: number) => void;
  setScheduler: (scheduler: string) => void;
  setSeed: (seed: number) => void;
  setBatchSize: (size: number) => void;
}

export const useGenerationStore = create<GenerationState>((set) => ({
  model: 'leonardo-creative-sdxl',
  prompt: '',
  negativePrompt: '',
  guidanceScale: 7,
  steps: 30,
  width: 512,
  height: 512,
  scheduler: 'EULER',
  seed: -1,
  batchSize: 1,
  
  setModel: (model) => set({ model }),
  setPrompt: (prompt) => set({ prompt }),
  setNegativePrompt: (prompt) => set({ negativePrompt }),
  setGuidanceScale: (guidanceScale) => set({ guidanceScale }),
  setSteps: (steps) => set({ steps }),
  setDimensions: (width, height) => set({ width, height }),
  setScheduler: (scheduler) => set({ scheduler }),
  setSeed: (seed) => set({ seed }),
  setBatchSize: (batchSize) => set({ batchSize }),
}));