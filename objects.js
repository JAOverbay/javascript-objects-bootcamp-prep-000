var playlist = {};
playlist['Pearl Jam'] = 'Garden';

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle});
}