import React from 'react';
import { motion } from 'framer-motion';

// Roman numeral conversion function
function convertToRoman(num) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let result = '';
    for (const numeral of romanNumerals) {
        while (num >= numeral.value) {
            result += numeral.symbol;
            num -= numeral.value;
        }
    }
    return result;
}

const Footer = () => {
    const currentYear = new Date().getFullYear();  // Get the current year
    const romanYear = convertToRoman(currentYear); // Convert the year to Roman numerals

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }} // 3 seconds delay, 1 second fade-in
            className="text-[#808080] "
        >
            <p>© {romanYear} Paul S. All rights reserved.</p>
        </motion.footer>
    );
};

export default Footer;
