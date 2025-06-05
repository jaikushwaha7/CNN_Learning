let currentLayer = 0;
let isAnimating = false;

// Initialize channel displays
function initializeChannels() {
    try {
        const layer1 = document.getElementById('layer1Channels');
        if (!layer1) throw new Error('layer1Channels element not found');
        for (let i = 0; i < 8; i++) {
            const channel = document.createElement('div');
            channel.className = 'mini-channel';
            channel.style.background = `hsl(${i * 45}, 70%, 60%)`;
            layer1.appendChild(channel);
        }

        const layer2 = document.getElementById('layer2Channels');
        if (!layer2) throw new Error('layer2Channels element not found');
        for (let i = 0; i < 12; i++) {
            const channel = document.createElement('div');
            channel.className = 'mini-channel';
            channel.style.background = `hsl(${i * 30}, 70%, 50%)`;
            layer2.appendChild(channel);
        }

        const layer3 = document.getElementById('layer3Channels');
        if (!layer3) throw new Error('layer3Channels element not found');
        for (let i = 0; i < 16; i++) {
            const channel = document.createElement('div');
            channel.className = 'mini-channel';
            channel.style.background = `hsl(${i * 22.5}, 70%, 40%)`;
            layer3.appendChild(channel);
        }
    } catch (error) {
        console.error('Error in initializeChannels:', error);
    }
}

function demonstrateConvolution() {
    if (isAnimating) return;
    isAnimating = true;

    try {
        const inputChannels = document.querySelectorAll('#inputChannels .channel');
        const outputChannel = document.querySelector('.feature-channel');
        if (!inputChannels.length || !outputChannel) throw new Error('Input or output channels not found');

        inputChannels.forEach((channel, index) => {
            setTimeout(() => {
                channel.style.transform = 'scale(1.2)';
                channel.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
                
                setTimeout(() => {
                    channel.style.transform = 'scale(1)';
                    channel.style.boxShadow = 'none';
                }, 800);
            }, index * 300);
        });

        setTimeout(() => {
            outputChannel.style.transform = 'scale(1.3)';
            outputChannel.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4)';
            outputChannel.innerHTML = 'Combined<br>Feature';
            
            setTimeout(() => {
                outputChannel.style.transform = 'scale(1)';
                isAnimating = false;
            }, 1000);
        }, 1200);
    } catch (error) {
        console.error('Error in demonstrateConvolution:', error);
        isAnimating = false;
    }
}

function resetDemo() {
    try {
        const allChannels = document.querySelectorAll('.channel');
        if (!allChannels.length) throw new Error('No channels found');
        allChannels.forEach(channel => {
            channel.style.transform = 'scale(1)';
            channel.style.boxShadow = 'none';
        });

        const featureChannel = document.querySelector('.feature-channel');
        if (!featureChannel) throw new Error('Feature channel not found');
        featureChannel.style.background = 'linear-gradient(45deg, #9775fa, #7c3aed)';
        featureChannel.innerHTML = 'Feature<br>Map';
        
        isAnimating = false;
    } catch (error) {
        console.error('Error in resetDemo:', error);
    }
}

function animateFeatureDetection() {
    if (isAnimating) return;
    isAnimating = true;

    try {
        const outputChannels = document.querySelectorAll('#outputChannels .channel');
        if (!outputChannels.length) throw new Error('Output channels not found');
        const features = ['Detecting...', 'Analyzing...', 'Processing...', 'Learning...'];

        outputChannels.forEach((channel, index) => {
            setTimeout(() => {
                const originalText = channel.innerHTML;
                channel.innerHTML = features[index] || 'Processing...';
                channel.style.transform = 'scale(1.2) rotate(5deg)';
                channel.style.background = `linear-gradient(45deg, hsl(${index * 90}, 70%, 60%), hsl(${index * 90 + 30}, 70%, 50%))`;
                
                setTimeout(() => {
                    channel.innerHTML = originalText;
                    channel.style.transform = 'scale(1) rotate(0deg)';
                    channel.style.background = ''; // Reset to CSS-defined background
                }, 1500);
            }, index * 200);
        });

        setTimeout(() => {
            isAnimating = false;
        }, 2000);
    } catch (error) {
        console.error('Error in animateFeatureDetection:', error);
        isAnimating = false;
    }
}

function addMoreChannels() {
    try {
        const outputContainer = document.getElementById('outputChannels');
        if (!outputContainer) throw new Error('outputChannels element not found');
        const newFeatures = ['Shapes', 'Lines', 'Patterns', 'Colors'];
        
        newFeatures.forEach((feature, index) => {
            setTimeout(() => {
                const newChannel = document.createElement('div');
                newChannel.className = 'channel output-channel';
                newChannel.setAttribute('data-feature', feature.toLowerCase());
                newChannel.innerHTML = feature;
                newChannel.style.background = `linear-gradient(45deg, hsl(${(index + 4) * 60}, 70%, 60%), hsl(${(index + 4) * 60 + 30}, 70%, 50%))`;
                newChannel.style.transform = 'scale(0)';
                
                outputContainer.appendChild(newChannel);
                
                setTimeout(() => {
                    newChannel.style.transform = 'scale(1)';
                    // Attach click handler to new channel
                    newChannel.addEventListener('click', channelClickHandler);
                }, 100);
            }, index * 300);
        });
    } catch (error) {
        console.error('Error in addMoreChannels:', error);
    }
}

function animateArchitecture() {
    if (isAnimating) return;
    isAnimating = true;

    try {
        const layers = document.querySelectorAll('.layer');
        if (!layers.length) throw new Error('No layers found');
        
        layers.forEach(layer => layer.classList.remove('active'));
        
        layers.forEach((layer, index) => {
            setTimeout(() => {
                layer.classList.add('active');
                
                if (index > 0) {
                    layers[index - 1].classList.remove('active');
                }
                
                if (index === layers.length - 1) {
                    setTimeout(() => {
                        layer.classList.remove('active');
                        isAnimating = false;
                    }, 1500);
                }
            }, index * 1000);
        });
    } catch (error) {
        console.error('Error in animateArchitecture:', error);
        isAnimating = false;
    }
}

function explainLayer() {
    try {
        const explanations = [
            "Input Layer: Raw RGB image data with 3 channels representing Red, Green, and Blue color information.",
            "Conv Layer 1: 32 filters detect basic features like edges, corners, and simple patterns from the RGB input.",
            "Conv Layer 2: 64 filters combine basic features to detect more complex patterns like textures and shapes.",
            "Conv Layer 3: 128 filters identify high-level features and object parts by combining lower-level patterns."
        ];
        
        alert(explanations[currentLayer % explanations.length]);
        currentLayer++;
    } catch (error) {
        console.error('Error in explainLayer:', error);
    }
}

function highlightCode() {
    try {
        const codeLines = [
            'in_channels=3, out_channels=32',
            'in_channels=32, out_channels=64',
            'in_channels=64, out_channels=128'
        ];
        
        const codeElement = document.getElementById('codeExample');
        if (!codeElement) throw new Error('codeExample element not found');
        let originalHTML = codeElement.innerHTML;
        
        codeLines.forEach((line, index) => {
            setTimeout(() => {
                const regex = new RegExp(line.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
                codeElement.innerHTML = codeElement.innerHTML.replace(regex, `<span class="highlight">${line}</span>`);
                
                if (index === codeLines.length - 1) {
                    setTimeout(() => {
                        codeElement.innerHTML = originalHTML;
                    }, 3000);
                }
            }, index * 1000);
        });
    } catch (error) {
        console.error('Error in highlightCode:', error);
    }
}

function channelClickHandler() {
    if (isAnimating) return;
    
    try {
        const feature = this.getAttribute('data-feature') || this.getAttribute('data-channel');
        if (feature) {
            const messages = {
                'red': 'Red channel captures red color intensities, useful for detecting objects with red features.',
                'green': 'Green channel captures green color intensities, important for vegetation and natural scenes.',
                'blue': 'Blue channel captures blue color intensities, crucial for sky, water, and blue objects.',
                'edges': 'Edge detection filter identifies boundaries and contours in the image.',
                'texture': 'Texture filter detects surface patterns and material properties.',
                'corners': 'Corner detection filter finds intersection points and sharp features.',
                'blobs': 'Blob detection filter identifies circular or oval-shaped regions.'
            };
            
            if (messages[feature]) {
                alert(messages[feature]);
            }
        }
    } catch (error) {
        console.error('Error in channelClickHandler:', error);
    }
}

function createSparkle() {
    try {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: white;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: sparkle 2s linear forwards;
        `;
        
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 2000);
    } catch (error) {
        console.error('Error in createSparkle:', error);
    }
}

function showMathematicalDetails() {
    try {
        const mathSection = document.createElement('div');
        mathSection.className = 'section';
        mathSection.innerHTML = `
            <h2>🔢 Mathematical Deep Dive</h2>
            <div class="info-box">
                <h3>Convolution with Multiple Input Channels</h3>
                <p><strong>Formula:</strong> For input X with C channels and filter W:</p>
                <div class="code-example">
Y[i,j] = Σ(c=0 to C-1) Σ(m=0 to M-1) Σ(n=0 to N-1) X[c,i+m,j+n] × W[c,m,n] + bias
                </div>
                <p>Where:</p>
                <ul style="margin: 10px 0; padding-left: 20px;">
                    <li>Y[i,j] is the output at position (i,j)</li>
                    <li>C is the number of input channels</li>
                    <li>M×N is the filter size</li>
                    <li>X[c,i+m,j+n] is the input value at channel c, position (i+m,j+n)</li>
                    <li>W[c,m,n] is the filter weight at channel c, position (m,n)</li>
                </ul>
            </div>
            <div class="interactive-section">
                <h3>🧮 Interactive Calculation Example</h3>
                <p>Click to see step-by-step convolution calculation:</p>
                <div class="controls">
                    <button class="control-btn calc-steps-btn">📊 Show Calculation</button>
                    <button class="control-btn param-count-btn">🔢 Parameter Count</button>
                </div>
                <div id="calculationDetails" style="display:none; margin-top: 20px;">
                    <div class="code-example">
<pre id="calculationSteps">
Step 1: Input RGB pixel values at position (i,j)
   Red Channel:   [R11, R12, R13]
   Green Channel: [G11, G12, G13] 
   Blue Channel:  [B11, B12, B13]

Step 2: Apply 3×3×3 filter (3 channels, 3×3 spatial)
   Filter for Red:   [WR11, WR12, WR13]
   Filter for Green: [WG11, WG12, WG13]
   Filter for Blue:  [WB11, WB12, WB13]

Step 3: Compute convolution
   Red contribution:   R11×WR11 + R12×WR12 + R13×WR13 + ...
   Green contribution: G11×WG11 + G12×WG12 + G13×WG13 + ...
   Blue contribution:  B11×WB11 + B12×WB12 + B13×WB13 + ...

Step 4: Sum all contributions + bias
   Output = Red_contribution + Green_contribution + Blue_contribution + bias
</pre>
                    </div>
                </div>
                <div id="parameterCount" style="display:none; margin-top: 20px;">
                    <h4>Parameter Count Analysis</h4>
                    <div class="filter-demo">
                        <div class="filter-box">
                            <h5>Layer 1: Conv2d(3→32)</h5>
                            <p><strong>Filters:</strong> 32</p>
                            <p><strong>Filter size:</strong> 3×3×3</p>
                            <p><strong>Parameters:</strong> 32 × (3×3×3) + 32 = <strong>896</strong></p>
                            <p><small>Weights + Biases</small></p>
                        </div>
                        <div class="filter-box">
                            <h5>Layer 2: Conv2d(32→64)</h5>
                            <p><strong>Filters:</strong> 64</p>
                            <p><strong>Filter size:</strong> 3×3×32</p>
                            <p><strong>Parameters:</strong> 64 × (3×3×32) + 64 = <strong>18,496</strong></p>
                            <p><small>Much larger due to 32 input channels!</small></p>
                        </div>
                        <div class="filter-box">
                            <h5>Layer 3: Conv2d(64→128)</h5>
                            <p><strong>Filters:</strong> 128</p>
                            <p><strong>Filter size:</strong> 3×3×64</p>
                            <p><strong>Parameters:</strong> 128 × (3×3×64) + 128 = <strong>73,856</strong></p>
                            <p><small>Parameters grow quickly!</small></p>
                        </div>
                    </div>
                    <div class="info-box">
                        <strong>Total Parameters:</strong> 896 + 18,496 + 73,856 = <strong>93,248</strong> parameters just for these 3 layers!
                    </div>
                </div>
            </div>
        `;
        
        const lastSection = document.querySelector('.section:last-child');
        if (!lastSection || !lastSection.parentNode) throw new Error('Last section not found');
        lastSection.parentNode.insertBefore(mathSection, lastSection);
        
        // Attach event listeners to dynamically added buttons
        document.querySelector('.calc-steps-btn')?.addEventListener('click', showCalculationSteps);
        document.querySelector('.param-count-btn')?.addEventListener('click', toggleParameterCount);
    } catch (error) {
        console.error('Error in showMathematicalDetails:', error);
    }
}

function showCalculationSteps() {
    try {
        const details = document.getElementById('calculationDetails');
        if (!details) throw new Error('calculationDetails element not found');
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
        
        if (details.style.display === 'block') {
            const lines = document.querySelector('#calculationSteps')?.textContent.split('\n') || [];
            const pre = document.querySelector('#calculationSteps');
            if (!pre) throw new Error('calculationSteps element not found');
            pre.innerHTML = '';
            
            lines.forEach((line, index) => {
                setTimeout(() => {
                    const div = document.createElement('div');
                    div.textContent = line;
                    div.style.opacity = '0';
                    div.style.transition = 'opacity 0.5s ease';
                    pre.appendChild(div);
                    
                    setTimeout(() => {
                        div.style.opacity = '1';
                    }, 100);
                }, index * 500);
            });
        }
    } catch (error) {
        console.error('Error in showCalculationSteps:', error);
    }
}

function toggleParameterCount() {
    try {
        const paramCount = document.getElementById('parameterCount');
        if (!paramCount) throw new Error('parameterCount element not found');
        paramCount.style.display = paramCount.style.display === 'none' ? 'block' : 'none';
    } catch (error) {
        console.error('Error in toggleParameterCount:', error);
    }
}

function addAdvancedVisualization() {
    try {
        const advancedSection = document.createElement('div');
        advancedSection.className = 'section';
        advancedSection.innerHTML = `
            <h2>🎨 Advanced Channel Visualization</h2>
            <div class="interactive-section">
                <h3>Feature Map Evolution Simulator</h3>
                <p>Watch how feature maps evolve through the network layers:</p>
                <div id="featureMapCanvas" style="display: flex; gap: 20px; justify-content: center; margin: 20px 0;">
                    <canvas id="inputCanvas" width="100" height="100" style="border: 2px solid #333; border-radius: 8px;"></canvas>
                    <div class="arrow">→</div>
                    <canvas id="layer1Canvas" width="100" height="100" style="border: 2px solid #333; border-radius: 8px;"></canvas>
                    <div class="arrow">→</div>
                    <canvas id="layer2Canvas" width="100" height="100" style="border: 2px solid #333; border-radius: 8px;"></canvas>
                    <div class="arrow">→</div>
                    <canvas id="layer3Canvas" width="100" height="100" style="border: 2px solid #333; border-radius: 8px;"></canvas>
                </div>
                <div class="controls">
                    <button class="control-btn simulate-feature-btn">🎬 Simulate Feature Evolution</button>
                    <button class="control-btn channel-compare-btn">📊 Compare Channels</button>
                    <button class="control-btn random-pattern-btn">🎲 Random Input Pattern</button>
                </div>
                <div id="channelComparison" style="display:none; margin-top: 20px;">
                    <h4>Channel-wise Feature Comparison</h4>
                    <div class="filter-demo">
                        <div class="filter-box">
                            <h5>Early Layers (1-2)</h5>
                            <p><strong>Features:</strong> Edges, Lines, Corners</p>
                            <p><strong>Receptive Field:</strong> Small (3×3 to 7×7)</p>
                            <p><strong>Abstraction:</strong> Low-level</p>
                        </div>
                        <div class="filter-box">
                            <h5>Middle Layers (3-5)</h5>
                            <p><strong>Features:</strong> Shapes, Textures, Patterns</p>
                            <p><strong>Receptive Field:</strong> Medium (15×15 to 31×31)</p>
                            <p><strong>Abstraction:</strong> Mid-level</p>
                        </div>
                        <div class="filter-box">
                            <h5>Deep Layers (6+)</h5>
                            <p><strong>Features:</strong> Objects, Parts, Concepts</p>
                            <p><strong>Receptive Field:</strong> Large (63×63+)</p>
                            <p><strong>Abstraction:</strong> High-level</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info-box">
                <h4>🔍 Key Insights:</h4>
                <ul style="margin: 10px 0; padding-left: 20px;">
                    <li><strong>Channel Depth vs. Spatial Size:</strong> As we go deeper, channels increase but spatial dimensions decrease</li>
                    <li><strong>Feature Hierarchy:</strong> Simple features combine to form complex features</li>
                    <li><strong>Translation Invariance:</strong> Multiple channels help detect features regardless of position</li>
                    <li><strong>Computational Trade-off:</strong> More channels = more parameters = more computation</li>
                </ul>
            </div>
        `;
        
        const container = document.querySelector('.container');
        const lastSection = container.querySelector('.section:last-child');
        if (!container || !lastSection) throw new Error('Container or last section not found');
        container.insertBefore(advancedSection, lastSection);
        
        // Attach event listeners to dynamically added buttons
        document.querySelector('.simulate-feature-btn')?.addEventListener('click', simulateFeatureMaps);
        document.querySelector('.channel-compare-btn')?.addEventListener('click', showChannelComparison);
        document.querySelector('.random-pattern-btn')?.addEventListener('click', generateRandomPattern);
        
        initializeCanvases();
    } catch (error) {
        console.error('Error in addAdvancedVisualization:', error);
    }
}

function initializeCanvases() {
    try {
        const canvases = ['inputCanvas', 'layer1Canvas', 'layer2Canvas', 'layer3Canvas'];
        canvases.forEach((canvasId, index) => {
            const canvas = document.getElementById(canvasId);
            if (!canvas) throw new Error(`Canvas ${canvasId} not found`);
            const ctx = canvas.getContext('2d');
            if (!ctx) throw new Error(`Canvas context for ${canvasId} not available`);
            
            if (index === 0) {
                drawRGBPattern(ctx);
            } else {
                drawFeatureMap(ctx, index);
            }
        });
    } catch (error) {
        console.error('Error in initializeCanvases:', error);
    }
}

function drawRGBPattern(ctx) {
    try {
        const imageData = ctx.createImageData(100, 100);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
            const x = (i / 4) % 100;
            const y = Math.floor((i / 4) / 100);
            
            data[i] = Math.sin(x * 0.1) * 127 + 128;
            data[i + 1] = Math.sin(y * 0.1) * 127 + 128;
            data[i + 2] = Math.sin((x + y) * 0.05) * 127 + 128;
            data[i + 3] = 255;
        }
        
        ctx.putImageData(imageData, 0, 0);
    } catch (error) {
        console.error('Error in drawRGBPattern:', error);
    }
}

function drawFeatureMap(ctx, layer) {
    try {
        const imageData = ctx.createImageData(100, 100);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
            const x = (i / 4) % 100;
            const y = Math.floor((i / 4) / 100);
            
            const freq = 0.02 * (layer + 1);
            const pattern = Math.sin(x * freq) * Math.cos(y * freq) * 127 + 128;
            
            data[i] = pattern * (layer === 1 ? 1 : 0.5);
            data[i + 1] = pattern * (layer === 2 ? 1 : 0.5);
            data[i + 2] = pattern * (layer === 3 ? 1 : 0.5);
            data[i + 3] = 255;
        }
        
        ctx.putImageData(imageData, 0, 0);
    } catch (error) {
        console.error('Error in drawFeatureMap:', error);
    }
}

function simulateFeatureMaps() {
    try {
        const canvases = ['inputCanvas', 'layer1Canvas', 'layer2Canvas', 'layer3Canvas'];
        
        canvases.forEach((canvasId, index) => {
            setTimeout(() => {
                const canvas = document.getElementById(canvasId);
                if (!canvas) throw new Error(`Canvas ${canvasId} not found`);
                canvas.style.transform = 'scale(1.1)';
                canvas.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.8)';
                
                setTimeout(() => {
                    canvas.style.transform = 'scale(1)';
                    canvas.style.boxShadow = 'none';
                }, 800);
            }, index * 400);
        });
    } catch (error) {
        console.error('Error in simulateFeatureMaps:', error);
    }
}

function showChannelComparison() {
    try {
        const comparison = document.getElementById('channelComparison');
        if (!comparison) throw new Error('channelComparison element not found');
        comparison.style.display = comparison.style.display === 'none' ? 'block' : 'none';
    } catch (error) {
        console.error('Error in showChannelComparison:', error);
    }
}

function generateRandomPattern() {
    try {
        const canvas = document.getElementById('inputCanvas');
        if (!canvas) throw new Error('inputCanvas not found');
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('inputCanvas context not available');
        
        const imageData = ctx.createImageData(100, 100);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
            data[i] = Math.random() * 255;
            data[i + 1] = Math.random() * 255;
            data[i + 2] = Math.random() * 255;
            data[i + 3] = 255;
        }
        
        ctx.putImageData(imageData, 0, 0);
        
        setTimeout(() => {
            ['layer1Canvas', 'layer2Canvas', 'layer3Canvas'].forEach((canvasId, index) => {
                const canvas = document.getElementById(canvasId);
                if (!canvas) throw new Error(`Canvas ${canvasId} not found`);
                drawFeatureMap(canvas.getContext('2d'), index + 1);
            });
        }, 500);
    } catch (error) {
        console.error('Error in generateRandomPattern:', error);
    }
}

// Initialize everything after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize channels and canvases
        initializeChannels();
        
        // Add dynamic sections
        showMathematicalDetails();
        addAdvancedVisualization();
        
        // Attach click handlers to channels
        const channels = document.querySelectorAll('.channel');
        channels.forEach(channel => channel.addEventListener('click', channelClickHandler));
        
        // Attach event listeners to buttons
        const buttonConfigs = [
            { selector: '.demonstrate-conv-btn', handler: demonstrateConvolution },
            { selector: '.reset-demo-btn', handler: resetDemo },
            { selector: '.animate-feature-btn', handler: animateFeatureDetection },
            { selector: '.add-channels-btn', handler: addMoreChannels },
            { selector: '.animate-arch-btn', handler: animateArchitecture },
            { selector: '.explain-layer-btn', handler: explainLayer },
            { selector: '.highlight-code-btn', handler: highlightCode }
        ];
        
        buttonConfigs.forEach(({ selector, handler }) => {
            const button = document.querySelector(selector);
            if (button) {
                button.addEventListener('click', handler);
            } else {
                console.warn(`Button with selector ${selector} not found`);
            }
        });
        
        // Add sparkle animation CSS
        const sparkleCSS = `
            @keyframes sparkle {
                0% { opacity: 1; transform: scale(0) rotate(0deg); }
                50% { opacity: 1; transform: scale(1) rotate(180deg); }
                100% { opacity: 0; transform: scale(0) rotate(360deg); }
            }
        `;
        const style = document.createElement('style');
        style.textContent = sparkleCSS;
        document.head.appendChild(style);
        
        // Start sparkle effect
        setInterval(createSparkle, 3000);
    } catch (error) {
        console.error('Error in DOMContentLoaded:', error);
    }
});