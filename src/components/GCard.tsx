import './GCard.css';

interface GlassmorphicCardProps {
    children?: any
}

const GlassmorphicCard = ({ children }: GlassmorphicCardProps) => {
  return (
    <div className="glassmorphic-card">
      {children}
    </div>
  );
};

export default GlassmorphicCard;