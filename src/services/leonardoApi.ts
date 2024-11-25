import { Leonardo, CreateGenerationRequestBody } from '@leonardo-ai/sdk';
import { LEONARDO_API_KEY } from './config';

const leonardoApi = new Leonardo({
  auth: LEONARDO_API_KEY,
  baseUrl: 'https://cloud.leonardo.ai/api/rest/v1'
});

export const generateImage = async (params: {
  prompt: string;
  modelId: string;
  negative_prompt?: string;
  guidance_scale?: number;
  num_inference_steps?: number;
  width?: number;
  height?: number;
  scheduler?: string;
  seed?: number;
  num_images?: number;
}) => {
  try {
    console.log('Generating with params:', params);
    
    const requestBody: CreateGenerationRequestBody = {
      prompt: params.prompt,
      modelId: params.modelId,
      negative_prompt: params.negative_prompt,
      guidance_scale: params.guidance_scale,
      num_inference_steps: params.num_inference_steps,
      width: params.width,
      height: params.height,
      scheduler: params.scheduler as any,
      seed: params.seed,
      num_images: params.num_images || 1,
    };

    const response = await leonardoApi.createGeneration(requestBody);
    console.log('API Response:', response);

    if (!response.sdGenerationJob) {
      throw new Error('No generation job returned from API');
    }

    return response.sdGenerationJob;
  } catch (error: any) {
    console.error('Generation error:', error);
    const errorMessage = error.response?.data?.error || error.message || 'Failed to generate image';
    console.error('Error details:', errorMessage);
    throw new Error(errorMessage);
  }
};

export const getGenerationById = async (id: string) => {
  try {
    const response = await leonardoApi.getGeneration(id);
    return response.sdGenerationJob;
  } catch (error: any) {
    console.error('Error fetching generation:', error);
    throw error;
  }
};

export const getModels = async () => {
  try {
    const response = await leonardoApi.getModels();
    return response.models;
  } catch (error: any) {
    console.error('Error fetching models:', error);
    throw error;
  }
};