import { useAuthStore } from "@/zustand/AuthStore";
import BuildStore, { IBuild } from "@/zustand/BuildStore";
import { window } from "@tauri-apps/api";
import { invoke } from "@tauri-apps/api/core";
import { join } from "@tauri-apps/api/path";
import { sendNotification } from "@tauri-apps/plugin-notification";

export const handlePlay = async (selectedPath: string) => {
    const authState = useAuthStore.getState();
    const buildstate = BuildStore.getState();

    const path = selectedPath.replace("/", "\\");
    const access_token = authState.jwt;

    if (!access_token) {
        sendNotification({
            title: "Stellar",
            body: "You are not authenticated!",
            sound: "ms-winsoundevent:Notification.Default",
        });
        return false;
    }

    const exe = await join(
        selectedPath,
        "FortniteGame",
        "Binaries",
        "Win64",
        "FortniteClient-Win64-Shipping.exe"
    );

    const exists = (await invoke("check_file_exists", { path: exe }).catch(() => false)) as boolean;
    if (!exists) {
        sendNotification({
            title: "Stellar",
            body: "Build does not exist / is corrupted!",
            sound: "ms-winsoundevent:Notification.Default",
        });
        return false;
    }

    const build: IBuild | undefined = buildstate.builds.get(selectedPath);
    if (!build) {
        sendNotification({
            title: "Stellar",
            body: `Build with path ${selectedPath} not found!`,
            sound: "ms-winsoundevent:Notification.Default",
        });
        return false;
    }

    try {
        console.log(`launching ${build.version}...`);
        sendNotification({
            title: `Starting ${build.version}`,
            body: `This may take a while so please wait while the game loads!`,
            sound: "ms-winsoundevent:Notification.Default",
        });

        window.getCurrentWindow().minimize();

        return true;
    } catch (error) {
        console.error(`error launching ${build.version}:`, error);
        sendNotification({
            title: "Stellar",
            body: `Failed to launch ${build.version}!`,
            sound: "ms-winsoundevent:Notification.Default",
        });
        return false;
    }
}