type BulletProps = {
  color?: string;
};

export default function Bullet({ color = "#22ABDD" }: BulletProps) {
  return (
    <span
      className="w-2 h-2 rounded-full"
      style={{
        backgroundColor: color,
        boxShadow: `0 0 4px ${color}`,
      }}
    />
  );
}
