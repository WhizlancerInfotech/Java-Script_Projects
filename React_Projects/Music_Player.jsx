export default function MusicPlayer() {
  const playMusic = () => {
    new Audio("/song.mp3").play();
  };

  return <button onClick={playMusic}>Play</button>;
}
