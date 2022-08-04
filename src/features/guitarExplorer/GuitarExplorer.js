/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GuitarSvg from '../../components/GuitarExplorer/Sprites/GuitarSvg';
import GuitarBody from '../../components/GuitarExplorer/Sprites/GuitarBody';
import BodyPlate from '../../components/GuitarExplorer/Sprites/BodyPlate';
import Neck from '../../components/GuitarExplorer/Sprites/Neck';
import GuitarHead from '../../components/GuitarExplorer/Sprites/GuitarHead';
import Strings from '../../components/GuitarExplorer/Sprites/Strings';
import { articles } from './support';
import { guitarParts } from './support/partlist';
import Bridge from '../../components/GuitarExplorer/Sprites/Bridge';
import GuitarViewer from '../../components/GuitarExplorer/GuitarViewer';
import Nameplate from '../../components/GuitarExplorer/Sprites/Nameplate';
import useSvgZoom from '../../hooks/useSvgZoom';
import {
  setAllParts, setColour, setGuitarPart, setNameplateContent, setPreset
} from './guitarSlice';
import GuitarColourManager from '../../components/GuitarExplorer/GuitarColourManager';
import PartPicker from '../../components/GuitarExplorer/Parts/PartPicker';
import TabButton from '../../components/Shared/TabButton';
// import RenderGuitarPart from '../../components/GuitarExplorer/Util/RenderGuitarPart';
import RenderPlateContent from '../../components/GuitarExplorer/Util/RenderPlateContent';
import TabContainer from '../../components/GuitarExplorer/TabContainer';
import RenderGuitarPart from '../../components/GuitarExplorer/Util/RenderGuitarPart';
import GuitarPresets from '../../components/GuitarExplorer/GuitarPresets';
import { buildPresets } from './support/presets';

function RenderPickups({ bridgePickup, neckPickup }) {
  if (bridgePickup.Component && neckPickup.Component) {
    return (
      <>
        <neckPickup.Component position="neck" />
        <bridgePickup.Component position="bridge" />
      </>
    );
  }
  return null;
}

function GuitarExplorer() {
  const [content, setContent] = useState(articles.summary);
  const dispatch = useDispatch();
  const {
    colours,
    parts,
    nameplateContent,
    nameplateFont
  } = useSelector((state) => state.guitar);
  const [currentTab, setCurrentTab] = useState(null);
  const {
    ref,
    onMouseDown,
    onMouseLeave,
    onMouseMove,
    onMouseUp,
    zoomHandler,
    zoom,
    scale,
    // viewBox
  } = useSvgZoom();

  return (
    <div className="flex flex-row justify-between items-start h-full w-full p-1">
      <div className="flex flex-col justify-start items-center w-1/2 mr-1 mb-1 overflow-y-scroll overflow-hidden whitespace-nowrap" style={{ height: '95%' }}>
        {/* <div
          className="p-1 m-1 border border-slate-800 dark:border-slate-200 rounded"
          style={{
            height: '40%',
            width: '90%',
          }}
        >
          <h2>
            {content.title}
          </h2>
          <div>
            {content.body}
          </div>
        </div> */}
        <div
          className="flex flex-row justify-start items-center p-1 m-1 border border-slate-800 dark:border-slate-200 rounded"
          style={{ width: '90%' }}
        >
          <TabButton
            onClick={() => setCurrentTab('presets')}
          >
            Presets
          </TabButton>
          <TabButton
            onClick={() => setCurrentTab('colours')}
          >
            Colours
          </TabButton>
          <TabButton
            onClick={() => setCurrentTab('parts')}
          >
            Parts
          </TabButton>
          <TabButton
            onClick={() => setCurrentTab('etc')}
          >
            Etc
          </TabButton>
        </div>
        <TabContainer>
          {currentTab === 'colours' ? (
            <GuitarColourManager
              colours={colours}
              setColour={({ value, key }) => {
              // console.log(value, key);
                dispatch(setColour({ value: value.hex, key }));
              }}
            />
          ) : null}
          {currentTab === 'parts' ? (
            <PartPicker
              parts={parts}
              setPart={(v) => dispatch(setGuitarPart(v))}
            />
          ) : null}
          {currentTab === 'presets' ? (
            <GuitarPresets
              presets={buildPresets}
              loadPreset={(preset) => dispatch(setPreset(preset))}
            />
          ) : null}
          {currentTab === 'etc' ? (
            <label htmlFor="nameplate-content-input" className="w-full flex flex-row justify-between items-center">
              <span>Nameplate Content</span>
              <input
                id="nameplate-content-input"
                className="bg-black text-center text-lime-400 italic font-mono p-1 border-2 w-1/2 rounded border-green-600 focus:border-blue-400 text-sm"
                type="text"
                value={nameplateContent}
                onChange={(e) => dispatch(setNameplateContent(e.target.value))}
              />
            </label>
          ) : null}
        </TabContainer>
      </div>
      <GuitarViewer
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onScroll={zoomHandler}
      >
        <GuitarSvg
          ref={ref}
          colours={colours}
          // viewBox={viewBox}
        >
          <GuitarBody
            onClick={() => setContent(articles.guitarBody)}
          />
          <RenderGuitarPart part={parts.plate} type="plate" />
          <Neck
            onClick={() => setContent(articles.guitarNeck)}
          />
          <GuitarHead
            onClick={() => setContent(articles.headAndTuners)}
          />
          <RenderPlateContent parts={parts} />
          <Bridge />
          <Nameplate content={nameplateContent} fontFamily={nameplateFont} />
          {guitarParts.pickups[parts.neckPickup]
            && guitarParts.pickups[parts.bridgePickup]
            ? (
              <RenderPickups
                neckPickup={guitarParts.pickups[parts.neckPickup]}
                bridgePickup={guitarParts.pickups[parts.bridgePickup]}
              />
            )
            : null}
          <Strings />
        </GuitarSvg>
      </GuitarViewer>
    </div>
  );
}

export default GuitarExplorer;
