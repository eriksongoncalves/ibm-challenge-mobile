import { IMAGE_URL } from '@env';

export function getImageUrl(url: string | undefined) {
  if (!url) {
    return undefined;
  }

  return IMAGE_URL + url;
}
