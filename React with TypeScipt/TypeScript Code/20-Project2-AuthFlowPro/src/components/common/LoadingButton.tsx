interface LoadingButtonProps {
  loading: boolean;
  children: React.ReactNode;
}

function LoadingButton({
  loading,
  children,
}: LoadingButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default LoadingButton;