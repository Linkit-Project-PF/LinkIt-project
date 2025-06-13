import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

export default class CloudinaryService {

  private cloudinary: Cloudinary | null = null

  constructor(){
    this.initialization();
  }

  initialization() {
    // Initialize the SDK
    this.cloudinary = new Cloudinary({
      cloud: {
        // TODO: Use .env vars
        cloudName: `dquhriqz3`,
        apiKey: `453674457686861`,
        apiSecret: `i1t_xabdnNzxuHAzAgGprsMycrI`,
      }
    });
  }

  getImageComponent(publicId: string): CloudinaryImage | null {

    if (!this.cloudinary) return null
    return this.cloudinary?.image(publicId)
  }
}