export default function ToggleSwitch({ enabled, label }) {
  return (
    <div>
      <span>{label}</span>
      <span>{enabled ? "ON" : "OFF"}</span>
    </div>
  );
}
