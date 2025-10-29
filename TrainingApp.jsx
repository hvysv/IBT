import React, { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";

const sampleLessons = [
  { id: "l1", title: "היכרות עם מערכת הנכסים", category: "התחלה", duration: "08:32", type: "video",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    content: "# היכרות\nבוידאו זה נדבר על הרכיבים העיקריים של המערכת.",
    resources: [{ name: "מדריך מהיר (PDF)", url: "/resources/quickstart.pdf" }]
  }
];

export default function TrainingApp() {
  return <div>שלום זה אתר ההדרכות לדוגמה</div>;
}
