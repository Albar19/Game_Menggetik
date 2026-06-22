// ─── AUDIO SYSTEM ────────────────────────────────────────────
let sfxVolume = 0.5;

export function setVolume(vol) {
  sfxVolume = vol;
}

export const AudioFX = {
  playTyping() {
    const a = new Audio('assets/audio/type.mp3');
    a.volume = sfxVolume;
    a.play().catch(() => { });
  },
  playLaser() {
    const a = new Audio('assets/audio/laserShoot.wav');
    a.volume = sfxVolume;
    a.play().catch(() => { });
  },
  playExplosion() {
    const a = new Audio('assets/audio/explosion.wav');
    a.volume = sfxVolume;
    a.play().catch(() => { });
  },
  playBuff() {
    const a = new Audio('assets/audio/powerUp.wav');
    a.volume = sfxVolume;
    a.play().catch(() => { });
  },
  playHeal() {
    const a = new Audio('assets/audio/heart.wav');
    a.volume = sfxVolume;
    a.play().catch(() => { });
  },
  playHit() {
    /* const a = new Audio('assets/audio/hit.mp3'); a.volume = sfxVolume; a.play().catch(() => {}); */
  },
  playGameOver() {
    const a = new Audio('assets/audio/gameOver.wav');
    a.volume = sfxVolume;
    a.play().catch(() => { });
  },
  playErrorType() {
    const a = new Audio('assets/audio/errorType.wav');
    a.volume = sfxVolume * 0.6;
    a.play().catch(() => { });
  },
  playScoreUp() {
    const a = new Audio('assets/audio/scoreUpwav.wav');
    a.volume = sfxVolume;
    a.play().catch(() => { });
  },
};
