import GradientText from './GradientText';

interface SectionFooterProps {
  className?: string;
}

export default function SectionFooter({ className }: SectionFooterProps) {
  return (
    <div style={{
      marginTop: '80px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }} className={className}>
      <GradientText
        colors={['#5227FF', '#FF9FFC', '#B19EEF']}
        animationSpeed={8}
        showBorder={false}
        pauseOnHover
        className=""
      >
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '3.6rem',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          cursor: 'pointer',
        }}>
          Lead. Build. Scale.
        </span>
      </GradientText>
    </div>
  );
}
