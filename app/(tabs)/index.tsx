import { ScrollView, Text, View } from 'react-native';
import { AlbumArt } from '../../components/music/AlbumArt';
import { Album }  from "@/models/Album";



//array of albums consisting of objects with id, title, artist, and artwork
const albums: Array<Album> = [
  { id: 1, title: 'The Money Store', artist: 'Death Grips', artwork: 'https://static.wikia.nocookie.net/4chanmusic/images/2/29/Tms-1200.jpg/revision/latest/scale-to-width-down/180?cb=20160210044217' },
  { id: 2, title: 'Sgt Peppers Lonely Hearts Club Band', artist: 'The Beatles', artwork: 'https://upload.wikimedia.org/wikipedia/en/5/50/Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg' },
  { id: 3, title: 'The Dark Side of the Moon', artist: 'Pink Floyd', artwork: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png' },
  { id: 4, title: 'By the Way', artist: 'Red Hot Chili Peppers', artwork: 'https://upload.wikimedia.org/wikipedia/en/2/23/Rhcp9.jpg' },
  { id: 5, title: 'To Pimp a Butterfly', artist: 'Kendrick Lamar', artwork: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png' },
]


export default function TabOneScreen() {
  return (
    <View className="">
      <Text className='text-white text-4xl'>Tab One</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='flex flex-row flex-wrap content-center items-center overflow-hidden'>
          {
            albums.map((album) => (
              <AlbumArt key={album.id} album={album}></AlbumArt>
            ))
          }
        </View>
      </ScrollView>
    </View>
  );
}
