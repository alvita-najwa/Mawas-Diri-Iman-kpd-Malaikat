/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ScreenNumber } from './types';
import { Header } from './components/common/Header';
import { LkpdModal } from './components/common/LkpdModal';
import { ScreenIndexModal } from './components/common/ScreenIndexModal';

// 19 Required Major Screens
import { Screen01Landing } from './components/screens/Screen01Landing';
import { Screen02Pemantik } from './components/screens/Screen02Pemantik';
import { Screen03MainMenu } from './components/screens/Screen03MainMenu';
import { Screen04LearningObjectives } from './components/screens/Screen04LearningObjectives';
import { Screen05Pengertian } from './components/screens/Screen05Pengertian';
import { Screen06RukunIman } from './components/screens/Screen06RukunIman';
import { Screen07Dalil } from './components/screens/Screen07Dalil';
import { Screen08SifatMalaikat } from './components/screens/Screen08SifatMalaikat';
import { Screen09Perbandingan } from './components/screens/Screen09Perbandingan';
import { Screen10Gallery } from './components/screens/Screen10Gallery';
import { Screen11JibrilMikail } from './components/screens/Screen11JibrilMikail';
import { Screen12IsrafilIzrail } from './components/screens/Screen12IsrafilIzrail';
import { Screen13MunkarNakir } from './components/screens/Screen13MunkarNakir';
import { Screen14RaqibAtid } from './components/screens/Screen14RaqibAtid';
import { Screen15MalikRidwan } from './components/screens/Screen15MalikRidwan';
import { Screen16Hikmah } from './components/screens/Screen16Hikmah';
import { Screen17MawasDiri } from './components/screens/Screen17MawasDiri';
import { Screen18KehidupanSehariHari } from './components/screens/Screen18KehidupanSehariHari';
import { Screen19Penutup } from './components/screens/Screen19Penutup';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenNumber>(1);
  const [isLkpdOpen, setIsLkpdOpen] = useState<boolean>(false);
  const [isScreenIndexOpen, setIsScreenIndexOpen] = useState<boolean>(false);

  // Scroll to top on every screen transition
  const handleNavigate = (targetScreen: ScreenNumber) => {
    setCurrentScreen(targetScreen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard navigation support (ArrowRight / ArrowLeft) when no modal or input is active
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is inside an input or textarea or modal is open
      const target = e.target as HTMLElement;
      if (
        isLkpdOpen ||
        isScreenIndexOpen ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === 'ArrowRight' && currentScreen < 19) {
        handleNavigate((currentScreen + 1) as ScreenNumber);
      } else if (e.key === 'ArrowLeft' && currentScreen > 1) {
        handleNavigate((currentScreen - 1) as ScreenNumber);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentScreen, isLkpdOpen, isScreenIndexOpen]);

  // Render current screen component
  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return <Screen01Landing onNavigate={handleNavigate} />;
      case 2:
        return <Screen02Pemantik onNavigate={handleNavigate} />;
      case 3:
        return <Screen03MainMenu onNavigate={handleNavigate} />;
      case 4:
        return <Screen04LearningObjectives onNavigate={handleNavigate} />;
      case 5:
        return <Screen05Pengertian onNavigate={handleNavigate} />;
      case 6:
        return <Screen06RukunIman onNavigate={handleNavigate} />;
      case 7:
        return <Screen07Dalil onNavigate={handleNavigate} />;
      case 8:
        return <Screen08SifatMalaikat onNavigate={handleNavigate} />;
      case 9:
        return <Screen09Perbandingan onNavigate={handleNavigate} />;
      case 10:
        return <Screen10Gallery onNavigate={handleNavigate} />;
      case 11:
        return <Screen11JibrilMikail onNavigate={handleNavigate} />;
      case 12:
        return <Screen12IsrafilIzrail onNavigate={handleNavigate} />;
      case 13:
        return <Screen13MunkarNakir onNavigate={handleNavigate} />;
      case 14:
        return <Screen14RaqibAtid onNavigate={handleNavigate} />;
      case 15:
        return <Screen15MalikRidwan onNavigate={handleNavigate} />;
      case 16:
        return <Screen16Hikmah onNavigate={handleNavigate} />;
      case 17:
        return <Screen17MawasDiri onNavigate={handleNavigate} />;
      case 18:
        return <Screen18KehidupanSehariHari onNavigate={handleNavigate} />;
      case 19:
        return (
          <Screen19Penutup
            onNavigate={handleNavigate}
            onOpenLkpd={() => setIsLkpdOpen(true)}
          />
        );
      default:
        return <Screen01Landing onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E8] text-[#27332F] flex flex-col font-sans selection:bg-[#9DB9A8]/40 selection:text-[#315A50]">
      {/* Universal Top Bar Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenLkpd={() => setIsLkpdOpen(true)}
        onOpenScreenIndex={() => setIsScreenIndexOpen(true)}
      />

      {/* Main Content Area */}
      <main className="grow flex flex-col justify-center transition-opacity duration-300">
        {renderScreen()}
      </main>

      {/* Interactive LKPD Modal (Accessible anytime or on Screen 19) */}
      <LkpdModal
        isOpen={isLkpdOpen}
        onClose={() => setIsLkpdOpen(false)}
      />

      {/* Quick Jump 19-Screen Index Modal */}
      <ScreenIndexModal
        isOpen={isScreenIndexOpen}
        onClose={() => setIsScreenIndexOpen(false)}
        currentScreen={currentScreen}
        onSelectScreen={handleNavigate}
      />
    </div>
  );
}

