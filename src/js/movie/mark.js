export default function(mark) {
  return `<div class='mark-div'>
  <div class='mark'>
    <span class='vote'>Vote:</span>
    <span>${mark.toFixed(1)}</span>
    </div>
  </div>`;
}
