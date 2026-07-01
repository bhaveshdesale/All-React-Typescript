interface EmptyStateProps {
  message?: string;
}

function EmptyState({
  message = "No data available.",
}: EmptyStateProps) {
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}

export default EmptyState;