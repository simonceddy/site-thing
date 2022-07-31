/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { throttle } from 'lodash';
import GuitarSvg from '../../components/GuitarExplorer/Sprites/GuitarSvg';
import GuitarBody from '../../components/GuitarExplorer/Sprites/GuitarBody';
import BodyPlate from '../../components/GuitarExplorer/Sprites/BodyPlate';
import Neck from '../../components/GuitarExplorer/Sprites/Neck';
import GuitarHead from '../../components/GuitarExplorer/Sprites/GuitarHead';
import PlateContent from '../../components/GuitarExplorer/Sprites/PlateContent';
import Pickups from '../../components/GuitarExplorer/Sprites/MatonPickups';
import Strings from '../../components/GuitarExplorer/Sprites/Strings';
import { articles, guitarParts } from './support';
import Bridge from '../../components/GuitarExplorer/Sprites/Bridge';
import EMGPickups from '../../components/GuitarExplorer/Sprites/EMGPickups';
import BlackKnobs from '../../components/GuitarExplorer/Sprites/BlackKnobs';
import GuitarViewer from '../../components/GuitarExplorer/GuitarViewer';
import Nameplate from '../../components/GuitarExplorer/Sprites/Nameplate';
import useSvgZoom from '../../hooks/useSvgZoom';
import ColourPicker from '../../containers/ColourPicker';
import {
  setAllParts, setColour, setGuitarPart, toggleCustomColours
} from './guitarSlice';
import GuitarColourManager from '../../components/GuitarExplorer/GuitarColourManager';
import PartPicker from '../../components/GuitarExplorer/Parts/PartPicker';
import TabButton from '../../components/Shared/TabButton';

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
    customColours,
    useCustomColours,
    parts
  } = useSelector((state) => state.guitar);
  const [viewOriginal, setViewOriginal] = useState(false);
  const [useCustomParts, setUseCustomParts] = useState(false);
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
            onClick={() => {
              setViewOriginal(!viewOriginal);
              dispatch(setAllParts({
                neckPickup: viewOriginal
                  ? 'emg60'
                  : 'matonSingleCoil',
                bridgePickup: viewOriginal
                  ? 'emg85'
                  : 'matonSwitchable',
              }));
            }}
          >
            {viewOriginal ? 'Show Current' : 'Show Original'}
          </TabButton>
          <TabButton
            onClick={() => dispatch(toggleCustomColours())}
          >
            Custom Colour
          </TabButton>
          <TabButton
            onClick={() => setUseCustomParts(!useCustomParts)}
          >
            Custom Parts
          </TabButton>
        </div>
        {useCustomColours ? (
          <div
            className="p-1 m-1 border border-slate-800 dark:border-slate-200 rounded"
            style={{ width: '90%' }}
          >
            <GuitarColourManager
              colours={customColours}
              setColour={throttle(({ value, key }) => {
                // console.log(value, key);
                dispatch(setColour({ value: value.hex, key }));
              }, 100)}
            />
          </div>
        ) : null}
        {useCustomParts ? (
          <div
            className="p-1 m-1 border border-slate-800 dark:border-slate-200 rounded"
            style={{ width: '90%' }}
          >
            <PartPicker
              parts={parts}
              setPart={(v) => dispatch(setGuitarPart(v))}
            />
          </div>
        ) : null}
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
          colours={useCustomColours ? customColours : null}
          // viewBox={viewBox}
        >
          <GuitarBody
            onClick={() => setContent(articles.guitarBody)}
          />
          <BodyPlate />
          <Neck
            onClick={() => setContent(articles.guitarNeck)}
          />
          <GuitarHead
            onClick={() => setContent(articles.headAndTuners)}
          />
          {viewOriginal ? <PlateContent /> : <BlackKnobs />}
          <Bridge />
          <Nameplate />
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
