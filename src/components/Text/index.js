import "./styles.css";

export default function Text({ type, size, className, children }) {
  return <p className={`text color-${type} size-${size} ${className}`}>{children}</p>;
}
