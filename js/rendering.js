import { ctx } from './canvas.js';

/** Draw a heart shape centered at (cx, cy) */
export function drawHeartShape(cx, cy, size) {
  const w = size, h = size;
  ctx.beginPath();
  ctx.moveTo(cx, cy - h * 0.15);
  ctx.bezierCurveTo(cx, cy - h * 0.55, cx - w * 0.55, cy - h * 0.55, cx - w * 0.55, cy - h * 0.15);
  ctx.bezierCurveTo(cx - w * 0.55, cy + h * 0.15, cx, cy + h * 0.35, cx, cy + h * 0.55);
  ctx.bezierCurveTo(cx, cy + h * 0.35, cx + w * 0.55, cy + h * 0.15, cx + w * 0.55, cy - h * 0.15);
  ctx.bezierCurveTo(cx + w * 0.55, cy - h * 0.55, cx, cy - h * 0.55, cx, cy - h * 0.15);
  ctx.closePath();
}
