interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="glass rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20">
      {children}
    </div>
  );
}
