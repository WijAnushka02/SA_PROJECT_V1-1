import Slider from '../Components/Slider'
import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { genreApi, reservationApi } from '../api'
import type { GenreRequest } from '../types'
import VisionMission from '../Components/VisionMission'
import Services from '../Components/Services'

function HomePage() {
    const queryClient = useQueryClient()
    const userId = Number(localStorage.getItem('userId'))
    const [newGenre, setNewGenre] = useState('')

    const { data: reservations } = useQuery({
        queryKey: ['reservations', userId],
        queryFn: () => reservationApi.getByUser(userId),
        enabled: !!userId,
    })

    const { data: genres } = useQuery({
        queryKey: ['genres', userId],
        queryFn: () => genreApi.getByUser(userId),
        enabled: !!userId,
    })

    const addGenreMutation = useMutation({
        mutationFn: (data: GenreRequest) => genreApi.add(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['genres', userId] })
            setNewGenre('')
        },
    })

    const handleAddGenre = (e: React.FormEvent) => {
        e.preventDefault()
        if (!newGenre.trim()) return
        addGenreMutation.mutate({ userId, name: newGenre })
    }

    const commonGenres = [
        'Fiction',
        'Non-Fiction',
        'Children',
        'Educational',
        'Comics',
        'Poetry'
    ]

    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-card">

                <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

                {/* Slider */}
                <Slider />

                {/* Reservations Section */}
                <section className="mb-12 mt-10">
                    <h2 className="text-xl font-semibold mb-6">Your Reservations</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {reservations?.map((res) => (
                            <div
                                key={res.id}
                                className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
                            >
                                <div className="font-bold text-lg">{res.stall.name}</div>
                                <div className="text-sm text-gray-600">{res.stall.size}</div>
                                <div className="mt-3 text-xs text-gray-400">
                                    QR: {res.qrCode.slice(0, 8)}...
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ================= GENRES SECTION ================= */}
                <section className="mb-14 text-center">
                    <h2 className="text-xl font-semibold mb-8">
                        Literary Genres You'll Display
                    </h2>

                    {/* Add Genre Form - Centered */}
                    <form
                        onSubmit={handleAddGenre}
                        className="flex justify-center items-center gap-4 mb-8"
                    >
                        <input
                            type="text"
                            value={newGenre}
                            onChange={(e) => setNewGenre(e.target.value)}
                            placeholder="Add a genre..."
                            className="border rounded-lg px-4 py-3 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
                        >
                            Add
                        </button>
                    </form>

                    {/* Displayed Genres - Centered */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {genres?.map((genre) => (
                            <span
                                key={genre.id}
                                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm shadow-sm"
                            >
                                {genre.name}
                            </span>
                        ))}
                    </div>

                    {/* Quick Add Buttons - Centered */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {commonGenres.map((genre) => (
                            <button
                                key={genre}
                                type="button"
                                onClick={() =>
                                    addGenreMutation.mutate({ userId, name: genre })
                                }
                                className="border px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition"
                            >
                                + {genre}
                            </button>
                        ))}
                    </div>
                </section>
                {/* =================================================== */}

                {/* Our Website Section */}
                <section className="text-center mt-16">
                    <h2 className="text-3xl font-bold text-blue-800">
                        Our Website
                    </h2>

                    <div className="w-24 h-1 bg-blue-500 mx-auto mt-3 rounded"></div>

                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mt-8">
                        Welcome to our Book Fair Stall Reservation System, a simple and
                        efficient platform designed to make stall booking easier for vendors
                        and organizers.
                    </p>

                    <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-2 rounded-lg shadow transition">
                        Read More
                    </button>

                    <div className="mt-20">
                        <VisionMission />
                    </div>

                    <div className="mt-16">
                        <Services />
                    </div>
                </section>

            </div>
        </div>
    )
}

export default HomePage;
