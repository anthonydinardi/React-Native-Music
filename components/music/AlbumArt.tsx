import { Album } from '@/models/Album';
import { ImageBackground, Text } from 'react-native';

interface Props {
  album: Album;
}

export function AlbumArt({ album }: Props) {
  return (
  <ImageBackground source={{uri: album.artwork}} className='flex text-center w-60 h-60'>
    <Text className='text-white'>{album.title}</Text>
    <Text className='text-white'>{album.artist}</Text>
  </ImageBackground>);
}
