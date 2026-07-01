import { useAppSelector } from "./reduxHooks";

export function useAuth() {
    return useAppSelector(
        state=>state.auth
    );
}