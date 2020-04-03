export const CAPTURE_PHOTO = 'sahaya/CAPTURE_PHOTO';

export function capturePhoto(photoURI) {
  return {
    type: CAPTURE_PHOTO,
    payload: { photoURI: photoURI } 
  };
}