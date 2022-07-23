/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import RackUnit from '../../../components/AudioSystem/RackUnits/RackUnit';
import RotaryKnob from '../../../components/AudioSystem/Shared/RotaryKnob';
import { paramData, validCompParamValue } from '../../../support/audioSystem';
import { setCompressorParam } from './compressorSlice';

function Compressor() {
  const {
    inputGain, ratio, threshold, makeupGain, attack, release, knee
  } = useSelector((state) => state.compressor.params);
  const dispatch = useDispatch();

  return (
    <RackUnit className="bg-slate-200 h-60 dark:bg-red-900 text-black dark:text-green-100">
      <div className="flex flex-row justify-between items-center p-2 font-mono h-full">
        <div
          id="input-gain-col"
          className="flex flex-col justify-around items-center p-2 m-1"
        >
          <span className="text-sm font-bold">Input Gain</span>
          <RotaryKnob
            diameter="60"
            className="m-2"
            min={paramData.inputGain.min}
            max={paramData.inputGain.max}
            step={paramData.inputGain.step}
            value={inputGain}
            onChange={(e) => dispatch(setCompressorParam({
              param: 'inputGain', value: validCompParamValue('inputGain', Number(e.target.value))
            }))}
          />
        </div>
        <div className="flex-col flex justify-evenly items-start m-1 border border-blue-400 rounded h-full">
          <div className="w-full flex flex-row justify-center items-center">
            {threshold} dB
          </div>
          <div className="flex flex-row justify-between items-center w-full p-1">
            <span className="text-sm mr-1 font-bold flex-1 text-left">Threshold</span>
            <RotaryKnob
              diameter="38"
              className="m-0.5"
              min={paramData.threshold.min}
              max={paramData.threshold.max}
              step={paramData.threshold.step}
              value={threshold}
              onChange={(e) => dispatch(setCompressorParam({
                param: 'threshold', value: validCompParamValue('threshold', Number(e.target.value))
              }))}
            />
          </div>
          <div className="w-full flex flex-row justify-center items-center">
            {ratio}:1
          </div>
          <div className="flex flex-row justify-between items-center w-full p-1">
            <span className="text-sm mr-1 font-bold flex-1 text-left">Ratio</span>
            <RotaryKnob
              diameter="38"
              className="m-0.5"
              min={paramData.ratio.min}
              max={paramData.ratio.max}
              step={paramData.ratio.step}
              value={ratio}
              onChange={(e) => dispatch(setCompressorParam({
                param: 'ratio', value: validCompParamValue('ratio', Number(e.target.value))
              }))}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between items-center p-1 m-1 flex-1 border border-blue-400 rounded h-full">
          <div className="flex-1 border-b border-b-blue-400 w-full">
            {}
          </div>
          <div className="flex flex-row justify-around items-center">
            <div className="flex flex-col justify-between items-center m-0.5 border border-blue-400 rounded p-0.5 flex-1">
              <span className="text-sm font-bold flex-1 text-center">Attack</span>
              <RotaryKnob
                diameter="30"
                className="m-0.5"
                min={paramData.attack.min}
                max={paramData.attack.max}
                step={paramData.attack.step}
                value={attack}
                onChange={(e) => dispatch(setCompressorParam({
                  param: 'attack', value: validCompParamValue('attack', Number(e.target.value))
                }))}
              />
            </div>
            <div className="flex flex-col justify-between items-center m-0.5 border border-blue-400 rounded p-0.5 flex-1">
              <span className="text-sm font-bold flex-1 text-center">Release</span>
              <RotaryKnob
                diameter="30"
                className="m-0.5"
                min={paramData.release.min}
                max={paramData.release.max}
                step={paramData.release.step}
                value={release}
                onChange={(e) => dispatch(setCompressorParam({
                  param: 'release', value: validCompParamValue('release', Number(e.target.value))
                }))}
              />
            </div>
            <div className="flex flex-col justify-between items-center m-0.5 border border-blue-400 rounded p-0.5 flex-1">
              <span className="text-sm font-bold flex-1 text-center">Knee</span>
              <RotaryKnob
                diameter="30"
                className="m-0.5"
                min={paramData.knee.min}
                max={paramData.knee.max}
                step={paramData.knee.step}
                value={knee}
                onChange={(e) => dispatch(setCompressorParam({
                  param: 'knee', value: validCompParamValue('knee', Number(e.target.value))
                }))}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around items-center p-2 m-1">
          <span className="text-sm font-bold">Output Gain</span>
          <RotaryKnob
            diameter="60"
            className="m-2"
            min={paramData.makeupGain.min}
            max={paramData.makeupGain.max}
            step={paramData.makeupGain.step}
            value={makeupGain}
            onChange={(e) => dispatch(setCompressorParam({
              param: 'makeupGain', value: validCompParamValue('makeupGain', Number(e.target.value))
            }))}
          />
        </div>
      </div>
    </RackUnit>
  );
}

export default Compressor;
