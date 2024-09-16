"use client";

import React from "react";
import Countdown from "react-countdown";
import Image from "next/image";
import backdrop from "@/assets/background 2.png";
import Innerlogo from "@/assets/innerlogo.png";
import Outerlogo from "@/assets/Layer outter LOGO.png";
import IEEEday_logo from "@/assets/IEEEDAYLOGO.png";
import styles from "./countdown.module.scss";

const CountdownPage: React.FC = () => {
	const ieeeDay = new Date("2024-10-01T00:00:00");

	const renderer = ({ days, hours, minutes, seconds }: any) => (
		<div className="flex justify-center items-center space-x-4">
			<CountdownItem value={days} label="DAYS" />
			<CountdownItem value={hours} label="HRS" />
			<CountdownItem value={minutes} label="MIN" />
			<CountdownItem value={seconds} label="SEC" />
		</div>
	);

	return (
		<div className=" relative w-full h-[48rem] flex flex-col text-white overflow-hidden ">
			<div className="absolute inset-0">
				<Image
					src={backdrop}
					alt="Background"
					layout="fill"
					objectFit="cover"
					className="hidden lg:block z-[-1]"
				/>
			</div>
			<div className=" relative w-full p-4 sm:p-8 lg:p-10  ">
				<div className="flex mx-4 my-5 md:mx-24   justify-center ">
					<div className=" w-3/4 flex flex-col md:flex-row gap-4 items-center ">
						<div className="flex flex-col items-center md:items-start ">
							<Image
								src={IEEEday_logo}
								alt="IEEE Day Logo"
								width={120}
								className="w-[80px] sm:w-[120px] lg:w-[150px]"
							/>
						</div>
						<div className="flex flex-col text-center md:text-left">
							<h1 className="text-4xl sm:text-5xl lg:text-6xl">IEEE DAY</h1>
							<h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-[1rem]">
								2024
							</h2>
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center relative mx-4 md:mx-10 ">
					<div className="relative">
						<Image
							src={Outerlogo}
							alt="Outer Logo"
							width={800}
							height={800}
							className="w-[310px] sm:w-[500px] lg:w-[1150px] animate-spin-slow "
						/>
					</div>
					<div className="absolute  flex justify-center items-center ">
						<div className="overflow-hidden opacity-85 sm:blur">
							<Image
								src={Innerlogo}
								alt="Inner Logo"
								width={140}
								className="md:w-[250px] md:h-[250px] lg:w-[580px] lg:h-[580px]"
							/>
						</div>
					</div>
					<div className="absolute md:mt-[-2rem] sm:mt-[-1rem] lg:mt-[-20rem] text-center">
						<h2 className="text-xl sm:text-2xl lg:text-2xl">COMING SOON IN</h2>
						<Countdown date={ieeeDay} renderer={renderer} />
					</div>
				</div>
			</div>
		</div>
	);
};

const CountdownItem: React.FC<{ value: number; label: string }> = ({
	value,
	label,
}) => (
	<div className="text-center text-white text-stroke">
		<div className="text-4xl sm:text-5xl lg:text-6xl font-bold p-2 mt-4 sm:mt-6 lg:mt-8">
			{value.toString().padStart(2, "0")}
		</div>
		<div className="text-lg sm:text-xl lg:text-2xl">{label}</div>
	</div>
);

export default CountdownPage;
