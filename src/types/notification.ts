export default interface NotificationType {
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
    duration?: number; // in milliseconds
}