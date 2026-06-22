import { canvas, ctx } from '../canvas.js';

export function renderMenu(game) {
  ctx.fillStyle = 'rgba(5, 5, 15, 0.85)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowBlur = 30;
  ctx.shadowColor = '#0ff';
  ctx.fillStyle = '#0ff';
  ctx.font = 'bold 48px "Orbitron", sans-serif';
  ctx.fillText(game.t('titleLine1'), cx, cy - 90);
  ctx.font = 'bold 56px "Orbitron", sans-serif';
  ctx.fillStyle = '#fff';
  ctx.shadowColor = '#ff3399';
  ctx.fillText(game.t('titleLine2'), cx, cy - 35);
  ctx.shadowBlur = 0;

  const lineW = 300;
  const grad = ctx.createLinearGradient(cx - lineW / 2, 0, cx + lineW / 2, 0);
  grad.addColorStop(0, 'transparent');
  grad.addColorStop(0.3, '#0ff');
  grad.addColorStop(0.7, '#ff3399');
  grad.addColorStop(1, 'transparent');
  ctx.strokeStyle = grad;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - lineW / 2, cy + 5);
  ctx.lineTo(cx + lineW / 2, cy + 5);
  ctx.stroke();

  ctx.font = '15px "Share Tech Mono", monospace';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
  ctx.fillText(game.t('instruction1'), cx, cy + 50);
  ctx.fillText(game.t('instruction2'), cx, cy + 75);

  const pulse = 0.5 + 0.5 * Math.sin(performance.now() / 400);
  ctx.font = 'bold 20px "Orbitron", sans-serif';
  ctx.fillStyle = `rgba(0, 255, 255, ${0.4 + 0.6 * pulse})`;
  ctx.shadowBlur = 12 * pulse;
  ctx.shadowColor = '#0ff';
  ctx.fillText(game.t('pressStart'), cx, cy + 130);
  ctx.shadowBlur = 0;

  ctx.font = '11px "Share Tech Mono", monospace';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.fillText(game.t('version'), cx, canvas.height - 30);
}

export function renderGameOver(game) {
  ctx.fillStyle = 'rgba(5, 0, 10, 0.8)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowBlur = 30;
  ctx.shadowColor = '#ff0044';
  ctx.fillStyle = '#ff0044';
  ctx.font = 'bold 60px "Orbitron", sans-serif';
  ctx.fillText(game.t('gameOver'), cx, cy - 70);
  ctx.shadowBlur = 0;

  ctx.font = '18px "Share Tech Mono", monospace';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.fillText(game.t('finalScore'), cx, cy - 10);
  ctx.font = 'bold 48px "Orbitron", sans-serif';
  ctx.shadowBlur = 10;
  ctx.shadowColor = '#ffd700';
  ctx.fillStyle = '#ffd700';
  ctx.fillText(`${game.score}`, cx, cy + 35);
  ctx.shadowBlur = 0;

  ctx.font = '14px "Share Tech Mono", monospace';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.fillText(`${game.t('maxSpeed')}: ${game.gameSpeed.toFixed(2)}x  ·  ${game.t('level')}: ${game.speedLevel}`, cx, cy + 80);

  const pulse = 0.5 + 0.5 * Math.sin(performance.now() / 400);
  ctx.font = 'bold 18px "Orbitron", sans-serif';
  ctx.fillStyle = `rgba(0, 255, 255, ${0.4 + 0.6 * pulse})`;
  ctx.shadowBlur = 10 * pulse;
  ctx.shadowColor = '#0ff';
  ctx.fillText(game.t('pressRestart'), cx, cy + 130);
  ctx.shadowBlur = 0;
}

export function renderPauseMenu(game) {
  ctx.fillStyle = 'rgba(5, 5, 15, 0.82)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const w = 520;
  const h = 570;
  const cardX = cx - w / 2;
  const cardY = cy - h / 2;

  ctx.fillStyle = 'rgba(10, 10, 30, 0.92)';
  ctx.beginPath();
  ctx.roundRect(cardX, cardY, w, h, 12);
  ctx.fill();

  ctx.strokeStyle = '#0ff';
  ctx.lineWidth = 2.5;
  ctx.shadowBlur = 20;
  ctx.shadowColor = '#0ff';
  ctx.stroke();
  ctx.shadowBlur = 0;

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'bold 28px "Orbitron", sans-serif';
  ctx.fillStyle = '#0ff';
  ctx.shadowBlur = 15;
  ctx.shadowColor = '#0ff';
  ctx.fillText(game.t('paused'), cx, cardY + 45);
  ctx.shadowBlur = 0;

  const grad = ctx.createLinearGradient(cx - 150, 0, cx + 150, 0);
  grad.addColorStop(0, 'transparent');
  grad.addColorStop(0.5, '#ff3399');
  grad.addColorStop(1, 'transparent');
  ctx.strokeStyle = grad;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - 150, cardY + 70);
  ctx.lineTo(cx + 150, cardY + 70);
  ctx.stroke();

  const row0Focused = game.pauseMenuSelectedRow === 0;
  ctx.font = 'bold 13px "Orbitron", monospace';
  ctx.fillStyle = row0Focused ? '#ff3399' : '#888';
  if (row0Focused) {
    ctx.shadowBlur = 6;
    ctx.shadowColor = '#ff3399';
  }
  ctx.fillText(game.t('language'), cx, cardY + 100);
  ctx.shadowBlur = 0;

  const enSelected = game.language === 'en';
  const enX = cx - 110;
  const enY = cardY + 115;
  ctx.beginPath();
  ctx.roundRect(enX, enY, 100, 30, 5);
  if (enSelected) {
    ctx.fillStyle = 'rgba(0, 255, 255, 0.2)';
    ctx.fill();
    ctx.strokeStyle = '#0ff';
    ctx.lineWidth = 2;
    ctx.shadowBlur = 8;
    ctx.shadowColor = '#0ff';
  } else {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1.5;
  }
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.fillStyle = enSelected ? '#0ff' : '#fff';
  ctx.font = 'bold 12px "Orbitron", monospace';
  ctx.fillText('ENGLISH', cx - 60, cardY + 130);

  const idSelected = game.language === 'id';
  const idX = cx + 10;
  const idY = cardY + 115;
  ctx.beginPath();
  ctx.roundRect(idX, idY, 100, 30, 5);
  if (idSelected) {
    ctx.fillStyle = 'rgba(0, 255, 255, 0.2)';
    ctx.fill();
    ctx.strokeStyle = '#0ff';
    ctx.lineWidth = 2;
    ctx.shadowBlur = 8;
    ctx.shadowColor = '#0ff';
  } else {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1.5;
  }
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.fillStyle = idSelected ? '#0ff' : '#fff';
  ctx.fillText('INDONESIA', cx + 60, cardY + 130);

  const row1Focused = game.pauseMenuSelectedRow === 1;
  ctx.font = 'bold 13px "Orbitron", monospace';
  ctx.fillStyle = row1Focused ? '#ff3399' : '#888';
  if (row1Focused) {
    ctx.shadowBlur = 6;
    ctx.shadowColor = '#ff3399';
  }
  ctx.fillText(game.t('refreshRate'), cx, cardY + 175);
  ctx.shadowBlur = 0;

  const fpsOptions = [60, 120, 144, 0];
  const fpsLabels = ['60', '120', '144', game.t('unlimited')];
  const btnW = 80;
  const btnH = 30;
  const fpsGap = 14;
  const totalW = fpsOptions.length * btnW + (fpsOptions.length - 1) * fpsGap;
  const startX = cx - totalW / 2;
  const fpsY = cardY + 190;

  for (let i = 0; i < fpsOptions.length; i++) {
    const opt = fpsOptions[i];
    const lbl = fpsLabels[i];
    const selected = game.targetFPS === opt;
    const x = startX + i * (btnW + fpsGap);

    ctx.beginPath();
    ctx.roundRect(x, fpsY, btnW, btnH, 5);
    if (selected) {
      ctx.fillStyle = 'rgba(0, 255, 255, 0.2)';
      ctx.fill();
      ctx.strokeStyle = '#0ff';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#0ff';
    } else {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1.5;
    }
    ctx.stroke();
    ctx.shadowBlur = 0;

    ctx.fillStyle = selected ? '#0ff' : '#fff';
    ctx.font = 'bold 11px "Orbitron", monospace';
    ctx.fillText(lbl, x + btnW / 2, fpsY + btnH / 2);
  }

  const row2Focused = game.pauseMenuSelectedRow === 2;
  ctx.font = 'bold 13px "Orbitron", monospace';
  ctx.fillStyle = row2Focused ? '#ff3399' : '#888';
  if (row2Focused) {
    ctx.shadowBlur = 6;
    ctx.shadowColor = '#ff3399';
  }
  ctx.fillText(game.t('musicVolume'), cx, cardY + 240);
  ctx.shadowBlur = 0;

  const mDecX = cx - 110;
  const mDecY = cardY + 255;
  ctx.beginPath();
  ctx.roundRect(mDecX, mDecY, 30, 30, 5);
  ctx.strokeStyle = row2Focused ? '#ff3399' : 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 14px "Orbitron", monospace';
  ctx.fillText('-', mDecX + 15, mDecY + 15);

  const mBarX = cx - 70;
  const mBarY = cardY + 265;
  const mBarW = 140;
  const mBarH = 10;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.fillRect(mBarX, mBarY, mBarW, mBarH);
  ctx.fillStyle = '#0ff';
  ctx.shadowBlur = 8;
  ctx.shadowColor = '#0ff';
  ctx.fillRect(mBarX, mBarY, mBarW * game.musicVolume, mBarH);
  ctx.shadowBlur = 0;

  const mIncX = cx + 80;
  const mIncY = cardY + 255;
  ctx.beginPath();
  ctx.roundRect(mIncX, mIncY, 30, 30, 5);
  ctx.strokeStyle = row2Focused ? '#ff3399' : 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 14px "Orbitron", monospace';
  ctx.fillText('+', mIncX + 15, mIncY + 15);

  ctx.textAlign = 'left';
  ctx.font = 'bold 12px "Orbitron", monospace';
  ctx.fillStyle = '#fff';
  ctx.fillText(`${Math.round(game.musicVolume * 100)}%`, cx + 125, cardY + 270);
  ctx.textAlign = 'center';

  const row3Focused = game.pauseMenuSelectedRow === 3;
  ctx.font = 'bold 13px "Orbitron", monospace';
  ctx.fillStyle = row3Focused ? '#ff3399' : '#888';
  if (row3Focused) {
    ctx.shadowBlur = 6;
    ctx.shadowColor = '#ff3399';
  }
  ctx.fillText(game.t('sfxVolume'), cx, cardY + 305);
  ctx.shadowBlur = 0;

  const sDecX = cx - 110;
  const sDecY = cardY + 320;
  ctx.beginPath();
  ctx.roundRect(sDecX, sDecY, 30, 30, 5);
  ctx.strokeStyle = row3Focused ? '#ff3399' : 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 14px "Orbitron", monospace';
  ctx.fillText('-', sDecX + 15, sDecY + 15);

  const sBarX = cx - 70;
  const sBarY = cardY + 330;
  const sBarW = 140;
  const sBarH = 10;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.fillRect(sBarX, sBarY, sBarW, sBarH);
  ctx.fillStyle = '#0ff';
  ctx.shadowBlur = 8;
  ctx.shadowColor = '#0ff';
  ctx.fillRect(sBarX, sBarY, sBarW * game.sfxVolume, sBarH);
  ctx.shadowBlur = 0;

  const sIncX = cx + 80;
  const sIncY = cardY + 320;
  ctx.beginPath();
  ctx.roundRect(sIncX, sIncY, 30, 30, 5);
  ctx.strokeStyle = row3Focused ? '#ff3399' : 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 14px "Orbitron", monospace';
  ctx.fillText('+', sIncX + 15, sIncY + 15);

  ctx.textAlign = 'left';
  ctx.font = 'bold 12px "Orbitron", monospace';
  ctx.fillStyle = '#fff';
  ctx.fillText(`${Math.round(game.sfxVolume * 100)}%`, cx + 125, cardY + 335);
  ctx.textAlign = 'center';

  const row4Focused = game.pauseMenuSelectedRow === 4;
  ctx.font = 'bold 13px "Orbitron", monospace';
  ctx.fillStyle = row4Focused ? '#ff3399' : '#888';
  if (row4Focused) {
    ctx.shadowBlur = 6;
    ctx.shadowColor = '#ff3399';
  }
  ctx.fillText(game.t('errorShake'), cx, cardY + 370);
  ctx.shadowBlur = 0;

  const shakeOnSelected = game.errorShakeEnabled === true;
  const shakeOnX = cx - 110;
  const shakeOnY = cardY + 385;
  ctx.beginPath();
  ctx.roundRect(shakeOnX, shakeOnY, 100, 30, 5);
  if (shakeOnSelected) {
    ctx.fillStyle = 'rgba(0, 255, 255, 0.2)';
    ctx.fill();
    ctx.strokeStyle = '#0ff';
    ctx.lineWidth = 2;
    ctx.shadowBlur = 8;
    ctx.shadowColor = '#0ff';
  } else {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1.5;
  }
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.fillStyle = shakeOnSelected ? '#0ff' : '#fff';
  ctx.font = 'bold 12px "Orbitron", monospace';
  ctx.fillText('ON', cx - 60, cardY + 400);

  const shakeOffSelected = game.errorShakeEnabled === false;
  const shakeOffX = cx + 10;
  const shakeOffY = cardY + 385;
  ctx.beginPath();
  ctx.roundRect(shakeOffX, shakeOffY, 100, 30, 5);
  if (shakeOffSelected) {
    ctx.fillStyle = 'rgba(0, 255, 255, 0.2)';
    ctx.fill();
    ctx.strokeStyle = '#0ff';
    ctx.lineWidth = 2;
    ctx.shadowBlur = 8;
    ctx.shadowColor = '#0ff';
  } else {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1.5;
  }
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.fillStyle = shakeOffSelected ? '#0ff' : '#fff';
  ctx.fillText('OFF', cx + 60, cardY + 400);

  const row5Focused = game.pauseMenuSelectedRow === 5;
  const resX = cx - 100;
  const resY = cardY + 450;
  const resW = 200;
  const resH = 40;

  ctx.beginPath();
  ctx.roundRect(resX, resY, resW, resH, 6);
  if (row5Focused) {
    const pulse = 0.8 + 0.2 * Math.sin(performance.now() / 200);
    ctx.fillStyle = `rgba(255, 51, 153, ${0.15 * pulse})`;
    ctx.fill();
    ctx.strokeStyle = '#ff3399';
    ctx.lineWidth = 2.5;
    ctx.shadowBlur = 12 * pulse;
    ctx.shadowColor = '#ff3399';
  } else {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 1.5;
  }
  ctx.stroke();
  ctx.shadowBlur = 0;

  ctx.font = 'bold 15px "Orbitron", sans-serif';
  ctx.fillStyle = row5Focused ? '#ff3399' : '#fff';
  ctx.fillText(game.t('resume'), cx, resY + resH / 2);

  ctx.fillStyle = '#ff3399';
  ctx.font = 'bold 16px "Orbitron", sans-serif';
  ctx.shadowBlur = 8;
  ctx.shadowColor = '#ff3399';
  if (row0Focused) {
    ctx.fillText('>', cx - 140, cardY + 130);
  } else if (row1Focused) {
    ctx.fillText('>', startX - 25, fpsY + btnH / 2);
  } else if (row2Focused) {
    ctx.fillText('>', mDecX - 25, mDecY + 15);
  } else if (row3Focused) {
    ctx.fillText('>', sDecX - 25, sDecY + 15);
  } else if (row4Focused) {
    ctx.fillText('>', shakeOnX - 25, shakeOnY + 15);
  } else if (row5Focused) {
    ctx.fillText('>', cx - 125, resY + resH / 2);
  }
  ctx.shadowBlur = 0;

  const pulse = 0.5 + 0.5 * Math.sin(performance.now() / 400);
  ctx.font = '11px "Share Tech Mono", monospace';
  ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + 0.3 * pulse})`;
  ctx.fillText(game.t('pressEscResume'), cx, cardY + 535);
}
