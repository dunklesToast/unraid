/*
    This is a very basic example. Make sure to set your environment correctly.
    If you don't know how, check out the README.md :)
 */
import { SSHConfig, SSHExecutor } from '../src/executors';
import { Unraid, UnraidConfig } from '../src/instance/unraid';

(async () => {
    const unraid = new Unraid({
        executor: SSHExecutor,
        executorConfig: {
            host: process.env.SSH_HOST,
            password: process.env.SSH_PASSWORD,
            username: process.env.SSH_USER,
            port: parseInt(process.env.SSH_PORT ?? '22', 10),
        },
    });

    const hostname = await unraid.system.getHostname();

    console.log(hostname);

    const notificationCount = await unraid.unraid.getNotificationCount();

    console.log(notificationCount);

    const notifications = await unraid.unraid.getNotifications();

    console.log(notifications);

    unraid.executor.disconnect();
})();
