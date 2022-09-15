import { ImageBackground } from 'react-native';
import backcroundImg from '../../assets/background-galaxy.png'
import { styles } from './styles';

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={backcroundImg}
      defaultSource={backcroundImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}