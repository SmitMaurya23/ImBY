import { Lock } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const ChatPlaceHolder = () => {
	return (
		<div className='w-3/4 bg-gray-secondary flex flex-col items-center justify-center py-10'>
			<div className='flex flex-col items-center w-full justify-center py-10 gap-4'>
				<Image src={"/imby2.png"} alt='Hero' width={320} height={188} />
				<p className='text-5xl font-bold mt-5 mb-2 text-pink-600'>
					Welcome to ImBY
				</p>
				<p className='w-full text-center text-pink-600 text-lg font-semibold'>
					Chat with your buddies, Flourish with happiness
				</p>


				<Button className='rounded-full my-5 bg-green-primary hover:bg-green-secondary'>
					Excited to start!!!
				</Button>
			</div>
			<p className='w-1/2 mt-auto text-center text-gray-primary text-xs text-muted-foreground flex items-center justify-center gap-1'>
				<Lock size={10} /> Your personal messages are end-to-end encrypted
			</p>
		</div>
	);
};
export default ChatPlaceHolder;
