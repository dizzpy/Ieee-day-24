import Image from "next/image";

// images
import RegOpen from "@/assets/reg-open.png";
import RegClose from "@/assets/reg-closed.png";
import EventDay from "@/assets/event-day.png";
import TimelineTextContent from "@/components/ui/TimelineTextContent";

const Timeline = () => {
	return (
		<div className="sticky">
			<h1 className="text-center font-sansation font-semibold text-4xl tracking-widest md:text-6xl pt-20 pb-12 md:pb-20">
				TIMELINE
			</h1>

			<div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2 pb-10">
				{/* Stack 1 */}
				<div className="col-span-4 w-full h-full  my-0 md:block hidden">
					<Image
						className="mx-auto"
						src={RegOpen}
						alt="Register Open"
						width={240}
						style={{
							maxWidth: "100%",
							height: "auto",
						}}
					/>
				</div>
				<div className="relative col-span-1 w-full h-full flex justify-center items-center">
					<div className="mt-1 md:mt-20 md:h-[125%] h-full w-1 bg-white"></div>
					<div className="top-0.5 absolute w-6 h-6 rounded-full bg-white z-10 text-white text-center"></div>
				</div>
				<div className="md:col-span-4 w-full h-full md:mb-5 mb-5 col-span-8">
					<TimelineTextContent
						title="REGISTRATIONS OPEN"
						description="Get ready to remark your presence in IEEE Day 2024."
					/>
				</div>

				{/* Stack 2 */}
				<div className="relative col-span-1 w-full h-full flex justify-center items-center md:hidden">
					<div className="h-full mt-2 w-1 bg-white"></div>
					<div className="top-0 absolute w-6 h-6 rounded-full bg-white z-10 text-white text-center"></div>
				</div>
				<div className="md:col-span-4 w-full h-full md:pt-14 mb-5 col-span-8 flex justify-center items-center md:ml-[1rem]">
					<TimelineTextContent
						title="REGISTRATIONS CLOSE"
						description="Registrations are closing within a short period of time. Don’t miss your chance to be part of this incredible event!"
					/>
				</div>
				<div className="relative col-span-1 w-full h-full md:flex hidden justify-center items-center">
					<div className="h-[100%] mt-32 w-1 bg-white"></div>
					<div className="top-0.5 md:top-16 absolute w-6 h-6 rounded-full bg-white z-10 text-white text-center"></div>
				</div>
				<div className="col-span-4 w-full h-full md:mt-14 mb-5 md:block hidden">
					<Image
						src={RegClose}
						alt="Register Closed"
						width={250}
						height={200}
						style={{
							maxWidth: "100%",
							height: "auto",
						}}
					/>
				</div>

				{/* Stack 3 */}
				<div className="col-span-4 w-full h-full md:mb-5  md:block hidden">
					<Image
						src={EventDay}
						alt="IEEE Day Logo"
						className="mx-auto"
						width={250}
						style={{
							maxWidth: "100%",
							height: "auto",
						}}
					/>
				</div>
				<div className="relative col-span-1 w-full h-[85%] flex  justify-center items-center">
					<div className="top-0.5 md:top-12 absolute w-6 h-6 rounded-full bg-white z-10 text-white text-center"></div>
				</div>
				<div className="md:col-span-4 w-full h-full md:mt-12  my-0 col-span-8">
					<TimelineTextContent
						title="IEEE DAY 2024"
						description="An excitement awaits for on IEEE Day 2024! Secure your spot and be part of the celebration!"
					/>
				</div>
			</div>
		</div>
	);
};

export default Timeline;
