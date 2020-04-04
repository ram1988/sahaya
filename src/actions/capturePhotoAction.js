export const CAPTURE_PHOTO = 'sahaya/CAPTURE_PHOTO';

export function capturePhoto(data) {
  return {
    type: CAPTURE_PHOTO,
    payload: data
  };
}