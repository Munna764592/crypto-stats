'use client'

import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function Settings() {
    const [notifications, setNotifications] = useState(true)
    const [darkMode, setDarkMode] = useState(true)
    const [currency, setCurrency] = useState('USD')

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">Settings</h1>
            <div className="bg-gray-800 rounded-lg p-6 space-y-6">
                <div className="flex items-center justify-between">
                    <span className="text-lg">Enable Notifications</span>
                    <Switch
                        checked={notifications}
                        onChange={setNotifications}
                        className={`${notifications ? 'bg-blue-600' : 'bg-gray-600'
                            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                    >
                        <span
                            className={`${notifications ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                        />
                    </Switch>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-lg">Dark Mode</span>
                    <Switch
                        checked={darkMode}
                        onChange={setDarkMode}
                        className={`${darkMode ? 'bg-blue-600' : 'bg-gray-600'
                            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                    >
                        <span
                            className={`${darkMode ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                        />
                    </Switch>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-lg">Preferred Currency</span>
                    <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5"
                    >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="JPY">JPY</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

