import { auth } from "@/auth";
import { createClient } from "@/utils/supabase/server";
import DialogPublication from "./DialogPublication";

export default async () => {
    const session = await auth();
    const supabase = await createClient();
    const { data: user } = await supabase
      .from("users")
      .select("*")
      .eq("email", session!.user!.email)
      .single();
    return (
        <div className="w-full px-4 md:px-8 py-4">
            <div className="bg-neutral-950 rounded-lg shadow-xs shadow-amber-50/20 p-4">
                <div className="flex items-center gap-4 w-full">
                    <img
                        src={user!.image}
                        alt="Profile"
                        className="w-12 h-12 border border-gray-100/30 rounded-full"
                    />
                    <div className="w-full">
                        <DialogPublication user={user} />
                    </div>
                </div>
            </div>
        </div>
    );
}