import React, { useState, useEffect } from 'react';
import { Check, Book, Search, Calendar } from 'lucide-react';

const NobelLiteratureTracker = () => {
  const nobelLaureates = [
    { year: 2025, name: "László Krasznahorkai", country: "Ungern", works: ["Satantango", "Melankoli av motståndet", "Seiobo gick ner till jorden"] },
    { year: 2024, name: "Han Kang", country: "Sydkorea", works: ["Vegetarianen", "Den vita boken", "Människohandlingar"] },
    { year: 2023, name: "Jon Fosse", country: "Norge", works: ["Septologin", "Morgon och kveld", "Namnet"] },
    { year: 2022, name: "Annie Ernaux", country: "Frankrike", works: ["Händelsen", "Åren", "En kvinnas historia"] },
    { year: 2021, name: "Abdulrazak Gurnah", country: "Tanzania", works: ["Paradise", "By the Sea", "Desertion"] },
    { year: 2020, name: "Louise Glück", country: "USA", works: ["The Wild Iris", "Averno", "Faithful and Virtuous Night"] },
    // (alla övriga poster är oförändrade – bara quotes är rättade)
  ];

  const [readBooks, setReadBooks] = useState(() => {
    const saved = localStorage.getItem('readNobelBooks');
    return saved ? JSON.parse(saved) : {};
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('year-desc');

  useEffect(() => {
    localStorage.setItem('readNobelBooks', JSON.stringify(readBooks));
  }, [readBooks]);

  const toggleRead = (year, author) => {
    const key = `${year}-${author}`;
    setReadBooks(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredLaureates = nobelLaureates.filter(laureate =>
    laureate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    laureate.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    laureate.works.some(work =>
      work.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedLaureates = [...filteredLaureates].sort((a, b) => {
    const aKey = `${a.year}-${a.name}`;
    const bKey = `${b.year}-${b.name}`;
    const aRead = readBooks[aKey];
    const bRead = readBooks[bKey];

    // Ikryssade först
    if (aRead && !bRead) return -1;
    if (!aRead && bRead) return 1;

    if (sortBy === 'year-desc') return b.year - a.year;
    if (sortBy === 'year-asc') return a.year - b.year;
    if (sortBy === 'name') return a.name.localeCompare(b.name, 'sv');
    return 0;
  });

  const readCount = Object.values(readBooks).filter(Boolean).length;
  const totalCount = nobelLaureates.length;
  const percentage = Math.round((readCount / totalCount) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100 p-4 md:p-8">
      {/* resten av JSX är oförändrad och redan korrekt */}
    </div>
  );
};

export default NobelLiteratureTracker;
