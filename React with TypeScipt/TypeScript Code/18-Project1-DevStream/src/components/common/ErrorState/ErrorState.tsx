interface ErrorStateProps {
  message?: string ;
}

function ErrorState({
  message = "Something went wrong.",
}: ErrorStateProps) {
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}

export default ErrorState;