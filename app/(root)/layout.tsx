import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const loggedin = { firstName: "Junnel", lastName: "Crucillo" };

	return (
		<main className="flex h-screen w-full font-inter">
			<Sidebar user={loggedin} />
			{children}
		</main>
	);
}
