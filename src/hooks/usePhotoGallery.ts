import { useState, useEffect } from "react";
import { useCamera } from '@ionic/react-hooks/camera';
import { useFilesystem, base64FromPath } from '@ionic/react-hooks/filesystem';
import { useStorage } from '@ionic/react-hooks/storage';
import { isPlatform } from '@ionic/react';
import { CameraResultType, CameraSource, CameraPhoto, Capacitor, FilesystemDirectory } from "@capacitor/core";

export interface Photo {
  filepath: string;
  webviewPath?: string;
  base64?: string;
}

export function usePhotoGallery() {
  const { deleteFile, getUri, readFile, writeFile } = useFilesystem();
  const { getPhoto } = useCamera();
  const [photos, setPhotos] = useState<Photo[]>([]);

  const savePicture = async (photo: CameraPhoto, fileName: string) => {
    const base64Data = await base64FromPath(photo.webPath!);
    await writeFile({
      path: fileName,
      data: base64Data,
      directory: FilesystemDirectory.Data
    });
    return getPhotoFile(photo, fileName);
  };
  
  const getPhotoFile = async (cameraPhoto: CameraPhoto, fileName: string): Promise<Photo> => {
    return {
      filepath: fileName,
      webviewPath: cameraPhoto.webPath
    };
  };

  const takePhoto = async () => {
    const cameraPhoto = await getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    const fileName = new Date().getTime() + '.jpeg';
    const savedFileImage = await savePicture(cameraPhoto, fileName);
    const newPhotos = [savedFileImage, ...photos];
    setPhotos(newPhotos)
  };

  return {
    photos,
    takePhoto
  };
}